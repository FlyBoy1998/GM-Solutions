import supabase from "../lib/supabase";

export async function uploadProjectImage(
  projectId,
  file,
  type,
  position = null,
) {
  const extension = file.name.split(".").pop();

  const filename = crypto.randomUUID();

  const path =
    position !== null
      ? `${projectId}/${type}/${position}-${filename}.${extension}`
      : `${projectId}/${type}-${filename}.${extension}`;

  const { error: uploadError } = await supabase.storage
    .from("project_images")
    .upload(path, file, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    throw new Error("There was an error uploading the image.");
  }

  return {
    project_id: projectId,
    storage_path: path,
    image_type: type,
    position,
  };
}

export async function replaceMaterials(projectId, materials, signal) {
  const { error: deleteMaterialsError } = await supabase
    .from("materials")
    .delete()
    .eq("project_id", projectId)
    .abortSignal(signal);

  if (deleteMaterialsError) {
    throw new Error("Could not replace project materials.");
  }

  if (!materials?.length) return;

  const rows = materials
    .filter((item) => item.material?.trim())
    .map((item) => ({
      project_id: projectId,
      material: item.material.trim(),
    }));

  if (!rows.length) return;

  const { error: insertMaterialsError } = await supabase
    .from("materials")
    .insert(rows)
    .abortSignal(signal);

  if (insertMaterialsError) {
    throw new Error("Could not save project materials.");
  }
}

export async function replaceWorkCompleted(projectId, workCompleted, signal) {
  const { error: deleteWorkCompletedError } = await supabase
    .from("work_completed")
    .delete()
    .eq("project_id", projectId)
    .abortSignal(signal);

  if (deleteWorkCompletedError) {
    throw new Error("Could not replace work completed.");
  }

  if (!workCompleted.length) return;

  const rows = workCompleted
    .filter((item) => item.description?.trim())
    .map((item) => ({
      project_id: projectId,
      description: item.description.trim(),
    }));

  if (!rows.length) return;

  const { error: insertWorkCompletedRowsError } = await supabase
    .from("work_completed")
    .insert(rows)
    .abortSignal(signal);

  if (insertWorkCompletedRowsError) {
    throw new Error("Could not save work completed.");
  }
}

export async function replaceProjectImage(projectId, image, type, signal) {
  if (!image?.file) return null;

  const oldStoragePath = image.storage_path;

  const row = await uploadProjectImage(projectId, image.file, type);

  const { data: existingImage, error: findImageError } = await supabase
    .from("project_images")
    .select("id, storage_path")
    .eq("project_id", projectId)
    .eq("image_type", type)
    .maybeSingle()
    .abortSignal(signal);

  if (findImageError) {
    throw new Error(`Could not find existing ${type} image.`);
  }

  if (existingImage) {
    const { error: updateError } = await supabase
      .from("project_images")
      .update({ storage_path: row.storage_path })
      .eq("id", existingImage.id)
      .abortSignal(signal);

    if (updateError) {
      throw new Error(`Could not update ${type} image`);
    }
  } else {
    const { error: insertError } = await supabase
      .from("project_images")
      .insert(row);
    if (insertError) {
      throw new Error(`Could not save ${type} image.`);
    }
  }

  if (oldStoragePath) {
    const { error: deleteError } = await supabase.storage
      .from("project_images")
      .remove([oldStoragePath]);

    if (deleteError) {
      throw new Error(`Could not delete old ${type} image.`);
    }
  }

  return row;
}

export async function replaceCarouselImages(projectId, carouselImages, signal) {
  const images = carouselImages || [];

  const { data: existingCarouselImages, error: fetchError } = await supabase
    .from("project_images")
    .select("id", "storage_path", "position")
    .eq("project_id", projectId)
    .eq("image_type", "carousel")
    .order("position", { ascending: true })
    .abortSignal(signal);

  if (fetchError) {
    throw new Error("Could not load carousel images");
  }

  const submittedExistingIds = new Set(
    images.filter((image) => image.databaseId).map((image) => image.databaseId),
  );

  const deletedImages = existingCarouselImages.filter(
    (image) => !submittedExistingIds.has(image.id),
  );

  if (deletedImages.length) {
    const deletedImagesIds = deletedImages.map((image) => image.id);

    const { error } = await supabase
      .from("project_images")
      .delete()
      .in("id", deletedImagesIds)
      .abortSignal(signal);

    if (error) {
      throw new Error("Could not delete carousel images.");
    }

    const storagePaths = deletedImages
      .map((image) => image.storage_path)
      .filter(Boolean);

    if (storagePaths.length) {
      const { error: storageError } = await supabase.storage
        .from("project_images")
        .remove(storagePaths);

      if (storageError) {
        throw new Error("Could not delete storage paths.");
      }
    }
  }

  for (const [position, image] of images.entries()) {
    if (image.id && !image.file) {
      const { error: positionError } = await supabase
        .from("project_images")
        .update({ position })
        .eq("id", image.id)
        .abortSignal(signal);

      if (positionError) {
        throw new Error("Could not update carousel image position.");
      }
      continue;
    }

    if (image.file) {
      const newImage = await uploadProjectImage(
        projectId,
        image.file,
        "carousel",
        position,
      );

      const { error: uploadError } = await supabase
        .from("project_images")
        .insert(newImage)
        .abortSignal(signal);

      if (uploadError) {
        throw new Error("Could not save carousel image.");
      }
    }
  }
}

export async function getBucketFiles(bucket, type) {
  async function listFolder(path = "") {
    const { data, error } = await supabase.storage.from(bucket).list(path, {
      limit: 1000,
      offset: 0,
      sortBy: {
        column: "name",
        order: "asc",
      },
    });

    if (error) {
      throw new Error(`Could not load ${bucket}.`);
    }

    const files = [];
    const folders = [];

    for (const item of data ?? []) {
      const itemPath = path ? `${path}/${item.name}` : item.name;

      if (item.id === null) {
        folders.push(itemPath);
        continue;
      }

      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(itemPath);

      files.push({
        id: item.id,
        bucket,
        type,
        name: item.name,
        storage_path: itemPath,
        url: urlData.publicUrl,
        created_at: item.created_at,
        updated_at: item.updated_at,
        metadata: item.metadata,
      });
    }

    const nestedFiles = await Promise.all(
      folders.map((folder) => listFolder(folder)),
    );

    return [...files, ...nestedFiles];
  }

  return listFolder();
}
