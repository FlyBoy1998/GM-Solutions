import HamburgerBtn from "../../navigation/HamburgerButton";

export default function PageHeader({ heading, description, children }) {
  return (
    <div className="col-span-full flex justify-between items-center">
      <div className="flex flex-col gap-1.5">
        <h3 className="heading-md">{heading}</h3>
        <p className="text-gray-dark">{description}</p>
      </div>
      {children}
      <div className="hidden max-lg:block">
        <HamburgerBtn />
      </div>
    </div>
  );
}
