import SocialMediaTableHead from "./SocialMediaTableHead";
import SocialMediaTableRow from "./SocialMediaTableRow";

export default function SocialMediaTable() {
  return (
    <table className="w-full text-sm border-separate border-spacing-y-5.5">
      <SocialMediaTableHead />
      <tbody>
        <SocialMediaTableRow />
      </tbody>
    </table>
  );
}
