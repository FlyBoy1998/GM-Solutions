import FormField from "../../../../ui/FormField";

export default function SiteInformationForm() {
  return (
    <form action="" className="grid grid-cols-2 gap-6">
      <FormField
        type="input"
        inputType="text"
        label="Business Name"
        id="business-name"
        name="business-name"
        defaultValue="GM Solutions"
        additionalStyling="col-span-1"
      />
      <FormField
        type="input"
        inputType="text"
        label="Service Areas"
        id="service-areas"
        name="service-areas"
        defaultValue="London"
        additionalStyling="col-span-1"
      />
      <FormField
        type="textarea"
        label="Business Description"
        id="business-description"
        name="business-description"
        rows={5}
        defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam iste nesciunt blanditiis similique, consequuntur enim excepturi veritatis delectus deleniti ex nulla autem magnam, consequatur, error at tempore cumque corporis optio."
        additionalStyling="col-span-full"
      />
      <FormField
        type="textarea"
        label="Services Description"
        id="services-description"
        name="services-description"
        rows={5}
        defaultValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reiciendis doloribus, atque eius est sapiente animi laboriosam libero non tempora. Vero dolorem dolore, sit ipsam quo molestiae provident labore esse debitis asperiores magni optio."
        additionalStyling="col-span-full"
      />
    </form>
  );
}
