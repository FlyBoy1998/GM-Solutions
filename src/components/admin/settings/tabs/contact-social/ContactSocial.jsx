import ContactSocialSection from "./ContactSocialSection";
import SocialMediaSection from "./SocialMediaSection";

export default function ContactSocial() {
  return (
    <div className="col-span-full content-start grid grid-cols-3 gap-4">
      <ContactSocialSection />
      <SocialMediaSection />
    </div>
  );
}
