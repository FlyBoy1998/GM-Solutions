import { Link } from "react-router";

import Main from "../layout/Main";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound({
  title = "Page not found",
  description = "The page you are trying to access does not exist.",
  backTo = "/",
  backLabel = "Back to Home",
}) {
  return (
    <Main>
      <div className="flex justify-center items-start min-nav-offset-height">
        <div className="rounded-2xl bg-light-1 p-10 text-center shadow-sm">
          <p className="flex items-center justify-center mx-auto mb-5 size-14 rounded-full text-2xl font-bold bg-primary-transparent text-white">
            !
          </p>

          <h1 className="heading-md mb-3">{title}</h1>

          <p className="mb-6 text-gray-dark">{description}</p>

          <Link
            to={backTo}
            className="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-md font-bold bg-primary text-white hover:bg-primary-transparent transition-all duration-400 ease-out"
          >
            <ArrowLeft size={18} aria-hidden />
            {backLabel}
          </Link>
        </div>
      </div>
    </Main>
  );
}
