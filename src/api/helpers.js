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
