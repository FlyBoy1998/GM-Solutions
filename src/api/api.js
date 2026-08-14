import supabase from "../lib/supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    throw new Error("Could not load projects.");
  }

  return data;
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
