import { useParams } from "react-router";
import NavbarOffset from "../layout/NavbarOffset";

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <NavbarOffset>
      <h1>Project details</h1>
      <p>Project id: {id}</p>
    </NavbarOffset>
  );
}
