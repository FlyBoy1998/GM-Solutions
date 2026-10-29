import supabase from "../lib/supabase";
import { uploadStorageFile, replaceServiceImage } from "./helpers";

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

export async function deleteService(serviceId, signal) {
  const { data: images, error: imageError } = await supabase
    .from("service_images")
    .select("storage_path")
    .eq("service_id", serviceId)
    .abortSignal(signal);

  if (imageError) {
    throw new Error("Could not find service image.");
  }

  const storagePaths =
    images?.map((image) => image.storage_path).filter(Boolean) ?? [];

  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", serviceId)
    .abortSignal(signal);

  if (error) {
    throw new Error("Could not delete service.");
  }

  if (storagePaths.length) {
    const { error: storageError } = await supabase.storage
      .from("service_images")
      .remove(storagePaths);

    if (storageError) {
      throw new Error("Service deleted, but image cleanup failed.");
    }
  }
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
