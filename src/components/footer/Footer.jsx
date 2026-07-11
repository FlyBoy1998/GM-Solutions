import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterNavigation from "./FooterNavigation";
import FooterServices from "./FooterServices";

export default function Footer() {
  return (
    <footer className="section section-gap bg-black">
      <div className="wrapper grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-8 max-sm:grid-cols-1">
        <FooterBrand />
        <FooterNavigation />
        <FooterServices />
        <FooterContact />
      </div>
    </footer>
  );
}
