import { useNavigate } from "react-router";
import { FormProvider, useForm } from "react-hook-form";

import PageHeader from "../../ui/PageHeader";
import CtaButton from "../../../ui/CtaButton";
import ContactInformation from "./ContactInformation";
import EnquiryDetails from "./EnquiryDetails";
import Timeline from "./Timeline";
import AdditionalInformation from "./AdditionalInformation";
import Tip from "./Tip";

export default function ManageLeadForm() {
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      // Contact information
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      preferred_contact_method: "",

      // Enquiry details
      source: "",
      status: "",
      project_type: "",
      estimated_budget: "",
      enquiry_details: "",

      // Timeline
      preferred_start_date: "",
      timeframe: "",

      // Additional information
      property_address: "",
      notes: "",
    },
  });

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <PageHeader
        heading="Add New Lead"
        description="Enter the lead details below to keep track of the enquiries and opportunities"
      >
        <div className="flex items-center gap-4 max-lg:hidden">
          <CtaButton variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </CtaButton>
          <CtaButton variant="primary">Add Lead</CtaButton>
        </div>
      </PageHeader>

      <FormProvider {...methods}>
        <form
          id="leads-form"
          action=""
          className="grid grid-cols-5 items-start gap-6"
        >
          <div className="col-start-1 col-end-4 flex flex-col gap-6">
            <ContactInformation />
            <EnquiryDetails />
          </div>
          <div className="col-start-4 col-end-6 flex flex-col gap-6">
            <Timeline />
            <AdditionalInformation />
            <Tip />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
