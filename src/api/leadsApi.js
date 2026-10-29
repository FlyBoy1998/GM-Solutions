import supabase from "../lib/supabase";

export async function getLeads() {
  const { data, error } = await supabase.from("leads").select("*");

  if (error) {
    throw new Error("Could not load leads.");
  }

  return data;
}

export async function getLead(leadId) {
  const { data, error } = await supabase
    .from("leads")
    .select()
    .eq("id", leadId)
    .single();

  if (error) {
    throw new Error("Could not load lead details.");
  }

  return data;
}

export async function createLead(formData, signal) {
  const { data: lead, error: leadError } = await supabase
    .from("leads")
    .insert({
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      contact_method: formData.contact_method,
      source: formData.source,
      status: formData.status,
      project_type: formData.project_type,
      estimated_budget: formData.estimated_budget,
      enquiry: formData.enquiry,
      start_date: formData.start_date,
      timeframe: formData.timeframe,
      property_address: formData.property_address,
      notes: formData.notes,
    })
    .select()
    .single()
    .abortSignal(signal);

  if (leadError) {
    throw new Error("Could not create lead.");
  }

  return lead;
}

export async function updateLead(leadId, formData, signal) {
  const { data, error } = await supabase
    .from("leads")
    .update({
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      contact_method: formData.contact_method,
      source: formData.source,
      status: formData.status,
      project_type: formData.project_type,
      estimated_budget: formData.estimated_budget,
      enquiry: formData.enquiry,
      start_date: formData.start_date,
      timeframe: formData.timeframe,
      property_address: formData.property_address,
      notes: formData.notes,
    })
    .eq("id", leadId)
    .select()
    .single()
    .abortSignal(signal);

  if (error) {
    throw new Error("Could not update lead.");
  }

  return data;
}

export async function deleteLead(leadId, signal) {
  const { error } = await supabase
    .from("leads")
    .delete()
    .eq("id", leadId)
    .abortSignal(signal);

  if (error) {
    throw new Error("Could not delete lead.");
  }
}
