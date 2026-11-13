export default function Maintenance() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen z-10 py-(--nav-height)">
      <p className="eyebrow">We are currently under maintenance.</p>
      <h1 className="heading-xl mb-3">
        We'll be <br />
        back soon.
      </h1>
      <div className="accent-line"></div>
      <p className="section-description">
        Our website is undergoing maintenance to bring you a better and more
        reliable experience. Thank you for your patience and support.
      </p>
    </section>
  );
}
