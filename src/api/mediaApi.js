import supabase from "../lib/supabase";
import { mediaBuckets, mediaConfig } from "../constants/data";
import { getBucketFiles } from "./helpers";

export async function getMediaFiles() {
  const media = await Promise.all(
    mediaBuckets.map(({ name, type }) => getBucketFiles(name, type)),
  );

  return media.flat(3);
}

export async function downloadMediaFile(bucket, storagePath) {
  if (!bucket || !storagePath) {
    throw new Error("Media file information is missing.");
  }

  const { data, error } = await supabase.storage
    .from(bucket)
    .download(storagePath);

  if (error) {
    throw new Error("Could not download the media file.");
  }

  return data;
}

export async function deleteMedia(media) {
  const config = mediaConfig[media?.bucket];

  if (!config || !media?.storage_path) {
    throw new Error("Missing or invalid media details.");
  }

  const { table } = config;
  const { bucket, storage_path } = media;

  const { data: rows, error: findError } = await supabase
    .from(table)
    .select("id")
    .eq("storage_path", storage_path);

  if (findError) {
    throw new Error("Could not find media record.");
  }

  if (rows?.length) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq("storage_path", storage_path);

    if (error) {
      throw new Error("Could not delete media record.");
    }
  }

  const { error: storageError } = await supabase.storage
    .from(bucket)
    .remove([storage_path]);

  if (storageError) {
    throw new Error("Database record deleted, but storage deletion failed.");
  }

  return { success: true };
}
