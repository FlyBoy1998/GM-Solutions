import { useUser } from "../../hooks/useUser";

import AdminAuthAside from "./AdminAuthAside";
import AdminNavigation from "../navigation/AdminNavigation";

export default function AdminAside() {
  const { isAuthenticated } = useUser();

  let content;

  if (isAuthenticated) {
    content = <AdminNavigation />;
  } else {
    content = <AdminAuthAside />;
  }

  return content;
}
