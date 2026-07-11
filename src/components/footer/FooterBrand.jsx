import logo from "../../../public/images/gm-solutions-logo-dark.png";

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
      <p className="w-[70%] text-white max-sm:w-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        laudantium adipisci laborum distinctio.
      </p>
    </div>
  );
}
