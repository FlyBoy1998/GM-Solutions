import { NavLink } from "react-router";

import { ChartLine, TableOfContents } from "lucide-react";

import logo from "../../../public/images/gm-solutions-logo-dark.png";

export default function AdminAuthAside() {
  return (
    <div className="admin-aside-auth grid-span-1">
      <div className="relative flex flex-col justify-between h-full py-12 px-10 z-10">
        <div className="flex flex-col gap-8">
          <NavLink to="/" className="self-start rounded-md focus-ring">
            <img src={logo} className="logo" alt="Gm Solutions logo" />
          </NavLink>
          <div>
            <div className="eyebrow">Welcome back!</div>
            <h1 className="heading-sm mb-4 font-normal text-white">
              Sign in to your admin dashboard
            </h1>
            <p className="text-sm text-gray">
              Access and manage your projects and website content.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <ChartLine
              size={52}
              strokeWidth={3}
              className="text-primary-light p-3 border-2 border-gray-dark rounded-md"
              aria-hidden
            />
            <div className="flex flex-col">
              <p className="text-white font-bold">Manage Projects</p>
              <p className="text-sm text-gray">
                Add, edit and showcase your renovation projects.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <TableOfContents
              size={52}
              strokeWidth={3}
              className="text-primary-light p-3 border-2 border-gray-dark rounded-md"
              aria-hidden
            />
            <div className="flex flex-col">
              <p className="text-white font-bold">Update Contents</p>
              <p className="text-sm text-gray">
                Keep your website content fresh and up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
