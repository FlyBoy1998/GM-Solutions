import supabase from "../lib/supabase";

export async function getMaintenanceStatus() {
  const { data, error } = await supabase
    .from("settings")
    .select("is_maintenance_mode")
    .single();

  if (error) {
    throw new Error("Could not load maintenance status.");
  }

  return data.is_maintenance;
}

export async function updateMaintenanceStatus(isMaintenance) {
  const { data, error } = await supabase
    .from("settings")
    .update({ is_maintenance: isMaintenance })
    .select("is_maintenance_mode")
    .single();

  if (error) {
    throw new Error("Could not update maintenance status.");
  }

  return data.is_maintenance;
}
