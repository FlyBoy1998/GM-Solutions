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

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    throw new Error("Could not load projects.");
  }

  return data;
}

export async function createProject(formData, signal) {
  const { data: project, error: projectError } = await supabase
    .from("projects")
    .insert({
      title: formData.title,
      address: formData.address,
      category: formData.category,
      label: formData.label,
      description: formData.description,
      latitude: +formData.latitude,
      longitude: +formData.longitude,
      duration: formData.duration,
      completion_date: formData.completion_date,
      overview: formData.overview,
      budget_range: formData.budget_range,
      project_size: formData.project_size,
      alt: formData.alt,
    })
    .select()
    .single()
    .abortSignal(signal);

  if (projectError) {
    throw new Error(projectError);
  }

  const projectId = project.id;

  // Materials
  if (formData.materials?.length) {
    const materialRows = formData.materials.map((item) => ({
      project_id: projectId,
      material: item.trimmedMaterial,
    }));

    const { error } = await supabase.from("materials").insert(materialRows);

    if (error) {
      throw new Error(
        "Could not create material rows inside database. Please try again.",
      );
    }
  }

  // Work Completed
  if (formData.work_completed?.length) {
    const workCompletedRows = formData.work_completed.map((item) => ({
      project_id: projectId,
      description: item.description,
    }));

    const { error } = await supabase
      .from("work_completed")
      .insert(workCompletedRows);

    if (error) {
      throw new Error(
        "Could not work completed rows inside database. Please try again.",
      );
    }
  }

  // Images
  const imageRows = [];

  // // Thumbnail
  if (formData.thumbnail_image) {
    const row = await uploadProjectImage(
      projectId,
      formData.thumbnail_image,
      "thumbnail",
    );

    imageRows.push(row);
  }

  // // Main Image
  if (formData.main_image) {
    const row = await uploadProjectImage(
      projectId,
      formData.main_image,
      "main",
    );

    imageRows.push(row);
  }

  // // Before Image
  if (formData.before_image) {
    const row = await uploadProjectImage(
      projectId,
      formData.before_image,
      "before",
    );

    imageRows.push(row);
  }

  // // After Image
  if (formData.after_image) {
    const row = await uploadProjectImage(
      projectId,
      formData.after_image,
      "after",
    );

    imageRows.push(row);
  }

  // // Carousel Images
  if (formData.carousel_images?.length) {
    for (const [index, image] of formData.carousel_images.entries()) {
      if (!image.file) continue;

      const row = await uploadProjectImage(
        projectId,
        image.file,
        "carousel",
        index,
      );

      imageRows.push(row);
    }
  }

  // Insert all images
  if (imageRows.length) {
    const { error: imagesError } = await supabase
      .from("project_images")
      .insert(imageRows);

    if (imagesError) {
      throw new Error("Could not upload images");
    }
  }

  return project;
}

export async function getMediaFiles() {
  const bucketNames = ["carousel_images", "documents", "videos"];

  const results = await Promise.all(
    bucketNames.map(async (bucketName) => {
      const { data, error } = await supabase.storage.from(bucketName).list();

      if (error) {
        throw new Error("Something when wrong with data fetching.");
      }

      return data.map((file) => ({
        ...file,
        bucket: bucketName,
      }));
    }),
  );

  return results.flat().slice(1);
}

export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error) {
    throw new Error("Could not load project.");
  }

  return data;
}
