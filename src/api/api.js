import supabase from "../lib/supabase";

import { mediaBuckets } from "../constants/data";

import {
  uploadStorageFile,
  replaceMaterials,
  replaceWorkCompleted,
  replaceProjectImage,
  replaceCarouselImages,
  replaceServiceImage,
  getBucketFiles,
} from "./helpers";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select(`
      *,
      project_images (*),
      materials (*),
      work_completed (*)
    `);

  if (error) {
    throw new Error("Could not load projects.");
  }

  return data.map((project) => ({
    ...project,

    project_images: project?.project_images.map((file) => {
      const { data: urlData } = supabase.storage
        .from("project_images")
        .getPublicUrl(file.storage_path);

      return {
        ...file,
        storage_path: urlData,
      };
    }),
  }));
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
      status: formData.status,
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
      material: item.material,
    }));

    const { error } = await supabase
      .from("materials")
      .insert(materialRows)
      .abortSignal(signal);

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
      .insert(workCompletedRows)
      .abortSignal(signal);

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
    const row = await uploadStorageFile(
      "project_images",
      projectId,
      formData.thumbnail_image.file,
      "thumbnail",
    );

    imageRows.push({
      project_id: projectId,
      ...row,
    });
  }

  // // Main Image
  if (formData.main_image) {
    const row = await uploadStorageFile(
      "project_images",
      projectId,
      formData.main_image.file,
      "main",
    );

    imageRows.push({
      project_id: projectId,
      ...row,
    });
  }

  // // Before Image
  if (formData.before_image) {
    const row = await uploadStorageFile(
      "project_images",
      projectId,
      formData.before_image.file,
      "before",
    );

    imageRows.push({
      project_id: projectId,
      ...row,
    });
  }

  // // After Image
  if (formData.after_image) {
    const row = await uploadStorageFile(
      "project_images",
      projectId,
      formData.after_image.file,
      "after",
    );

    imageRows.push({
      project_id: projectId,
      ...row,
    });
  }

  // // Carousel Images
  if (formData.carousel_images?.length) {
    for (const [index, image] of formData.carousel_images.entries()) {
      if (!image.file) continue;

      const row = await uploadStorageFile(
        "project_images",
        projectId,
        image.file,
        "carousel",
        index,
      );

      imageRows.push({
        project_id: projectId,
        ...row,
      });
    }
  }

  // Insert all images
  if (imageRows.length) {
    const { error: imagesError } = await supabase
      .from("project_images")
      .insert(imageRows)
      .abortSignal(signal);

    if (imagesError) {
      throw new Error("Could not upload images");
    }
  }

  return project;
}

export async function getMediaFiles() {
  const media = await Promise.all(
    mediaBuckets.map(({ name, type }) => getBucketFiles(name, type)),
  );

  return media.flat(3);
}

export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      materials (
        id,
        material
      ),
      work_completed (
        id,
        description
      ),
      project_images (
        id,
        storage_path,
        image_type,
        position
      )
    `,
    )
    .eq("id", projectId)
    .single();

  if (error) {
    throw new Error("Could not load project.");
  }

  const projectImages = data?.project_images.map((file) => {
    const { data: urlData } = supabase.storage
      .from("project_images")
      .getPublicUrl(file.storage_path);

    return {
      ...file,
      storage_path: urlData.publicUrl,
    };
  });

  const thumbnail_image =
    projectImages?.find((image) => image.image_type === "thumbnail") ?? null;
  const main_image =
    projectImages?.find((image) => image.image_type === "main") ?? null;
  const before_image =
    projectImages?.find((image) => image.image_type === "before") ?? null;
  const after_image =
    projectImages?.find((image) => image.image_type === "after") ?? null;
  const carousel_images = projectImages?.reduce((arr, item) => {
    if (item.image_type === "carousel") {
      const fileName = item.storage_path.split("/").pop();

      arr.push({
        ...item,
        preview: item.storage_path,
        file_name: fileName,
      });
    }

    return arr;
  }, []);

  return {
    ...data,
    thumbnail_image,
    main_image,
    before_image,
    after_image,
    carousel_images,
  };
}

export async function updateProject(projectId, formData, signal) {
  const { data: project, error: projectError } = await supabase
    .from("projects")
    .update({
      title: formData.title,
      address: formData.address,
      category: formData.category,
      label: formData.label,
      description: formData.description,
      latitude: +formData.latitude,
      longitude: +formData.longitude,
      duration: formData.duration,
      completion_date: formData.completion_date,
      status: formData.status,
      overview: formData.overview,
      budget_range: formData.budget_range,
      project_size: formData.project_size,
      alt: formData.alt,
    })
    .eq("id", projectId)
    .select()
    .single()
    .abortSignal(signal);

  if (projectError) {
    throw new Error("Could not update project.");
  }

  // Replace materials
  await replaceMaterials(projectId, formData.materials, signal);

  // Replace work completed
  await replaceWorkCompleted(projectId, formData.work_completed, signal);

  // Replace single images
  await replaceProjectImage(
    projectId,
    formData.thumbnail_image,
    "thumbnail",
    signal,
  );

  await replaceProjectImage(projectId, formData.main_image, "main", signal);

  await replaceProjectImage(projectId, formData.before_image, "before", signal);

  await replaceProjectImage(projectId, formData.after_image, "after", signal);

  // Replace carousel images
  await replaceCarouselImages(projectId, formData.carousel_images, signal);

  return project;
}

export async function deleteProject(projectId, signal) {
  const { data: images, error: imagesError } = await supabase
    .from("project_images")
    .select("storage_path")
    .eq("project_id", projectId)
    .abortSignal(signal);

  if (imagesError) {
    throw new Error("Could not find project images.");
  }

  const storagePaths =
    images?.map((image) => image.storage_path).filter(Boolean) ?? [];

  const { error: projectError } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId)
    .abortSignal(signal);

  if (projectError) {
    throw new Error("Could not delete project.");
  }

  if (storagePaths.length) {
    const { error: storageError } = await supabase.storage
      .from("project_images")
      .remove(storagePaths);

    if (storageError) {
      throw new Error("Project deleted, but image cleanup failed.");
    }
  }
}

export async function getServices() {
  const { data: services, error: servicesError } = await supabase
    .from("services")
    .select(
      `
      *,
      service_images (*)
      `,
    )
    .order("id", { ascending: false });

  if (servicesError) {
    throw new Error("Could not load services.");
  }

  return services.map((service) => ({
    ...service,

    service_images: service.service_images?.map((file) => {
      const { data: urlData } = supabase.storage
        .from("service_images")
        .getPublicUrl(file.storage_path);

      return {
        ...file,
        storage_path: urlData.publicUrl,
      };
    }),
  }));
}

export async function getService(serviceId) {
  const { data, error } = await supabase
    .from("services")
    .select(
      `
      *,
      service_images (*)
    `,
    )
    .eq("id", serviceId)
    .single();

  if (error) {
    throw new Error("Could not load service.");
  }

  const serviceImages =
    data?.service_images?.map((file) => {
      const { data: urlData } = supabase.storage
        .from("service_images")
        .getPublicUrl(file.storage_path);

      return {
        ...file,
        url: urlData.publicUrl,
      };
    }) ?? [];

  const thumbnail_image =
    serviceImages.find((image) => image.image_type === "thumbnail") ?? null;

  console.log({
    ...data,
    service_images: serviceImages,
    thumbnail_image,
  });

  return {
    ...data,
    service_images: serviceImages,
    thumbnail_image,
  };
}

export async function createService(formData, signal) {
  const { data: service, error: serviceError } = await supabase
    .from("services")
    .insert({
      name: formData.name,
      description: formData.description,
      is_visible: formData.is_visible,
    })
    .select()
    .single()
    .abortSignal(signal);

  if (serviceError) {
    throw new Error(serviceError);
  }

  const serviceId = service.id;

  const images = [];

  if (formData.thumbnail_image?.file) {
    const row = await uploadStorageFile(
      "service_images",
      serviceId,
      formData.thumbnail_image.file,
      "thumbnail",
    );

    images.push({
      service_id: serviceId,
      ...row,
    });
  }

  if (images.length) {
    const { error: imagesError } = await supabase
      .from("service_images")
      .insert(images)
      .abortSignal(signal);

    if (imagesError) {
      throw new Error("Could not upload service image");
    }
  }

  return service;
}

export async function updateService(serviceId, formData, signal) {
  const { data, error: serviceError } = await supabase
    .from("services")
    .update({
      name: formData.name,
      description: formData.description,
      is_visible: formData.is_visible,
    })
    .eq("id", serviceId)
    .select()
    .single()
    .abortSignal(signal);

  if (serviceError) {
    throw new Error("Could not update service.");
  }

  await replaceServiceImage(
    serviceId,
    formData.thumbnail_image,
    "thumbnail",
    signal,
  );

  return data;
}

export async function toggleServiceVisibility(serviceId, isVisible, signal) {
  const { error } = await supabase
    .from("services")
    .update({ is_visible: isVisible })
    .eq("id", serviceId)
    .abortSignal(signal);

  if (error) {
    throw new Error("Could not change service visibility.");
  }

  return true;
}

export async function getLeads() {
  const { data, error } = await supabase.from("leads").select("*");

  if (error) {
    throw new Error("Could not load leads.");
  }

  return data;
}
