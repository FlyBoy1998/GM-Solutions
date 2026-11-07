import supabase from "../lib/supabase";

export async function getMaintenanceStatus() {
  const { data, error } = await supabase
    .from("settings")
    .select("is_maintenance")
    .single();

  if (error) {
    throw new Error("Could not load maintenance status.");
  }

  return data.is_maintenance;
}
