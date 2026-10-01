import { Link } from "react-router";

export default function FooterNavigation() {
  return (
    <div className="flex-1">
      <h3 className="mb-4 font-bold text-white">Quick links</h3>
      <nav>
        <ul className="list-none flex flex-col gap-3 text-white">
          <li>
            <Link to="/" className="footer-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="footer-nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/services" className="footer-nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
