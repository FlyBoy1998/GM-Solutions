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

  if (!materials.length) return;

  const rows = materials
    ?.filter((item) => item?.material.trim())
    .map((item) => ({
      project_id: projectId,
      material: item.material.trim(),
    }));

  const { error: insertMaterialsError } = await supabase
    .from("materials")
    .insert(rows)
    .abortSignal(signal);

  if (insertMaterialsError) {
    throw new Error("Could not save project materials.");
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
    } else {
      const { error: insertError } = await supabase
        .from("project_images")
        .insert(row);
      if (insertError) {
        throw new Error(`Could not save ${type} image.`);
      }
    }
  }

  if (oldStoragePath) {
    const { error: deleteError } = await supabase
      .storage("project_images")
      .remove([oldStoragePath]);

    if (deleteError) {
      throw new Error(`Could not delete old ${type} image.`);
    }
  }

  return row;
}
