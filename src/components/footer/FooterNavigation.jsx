import { Link } from "react-router";

export default function FooterNavigation() {
  return (
    <div className="flex-1">
      <h3 className="mb-4 font-bold text-white">Quick links</h3>
      <nav>
        <ul className="list-none flex flex-col gap-3 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-light active:text-light focus-ring"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-light active:text-light focus-ring"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-light active:text-light focus-ring"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-light active:text-light focus-ring"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
