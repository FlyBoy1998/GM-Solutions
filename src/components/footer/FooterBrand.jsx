import logo from "/images/gm-solutions-logo-dark.png";

export default function FooterBrand() {
  return (
    <div className="flex-1">
      <div className="w-40 mb-4">
        <img
          src={logo}
          className="w-full h-full object-cover"
          alt="Gm Solutions logo"
          loading="lazy"
        />
      </div>
      <p className="w-[70%] text-sm text-white max-sm:w-full">
        GM Solutions provides professional property improvement and renovation
        services helping transform spaces with thoughtful planning and attention
        to detail.
      </p>
    </div>
  );
}
