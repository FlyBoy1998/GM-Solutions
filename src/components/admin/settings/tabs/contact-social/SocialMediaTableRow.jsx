import { useState } from "react";

import { FaFacebook } from "react-icons/fa";

import FormField from "../../../../ui/FormField";
import ToggleButton from "../../../ui/ToggleButton";
import TableActions from "../../../ui/TableActions";

export default function SocialMediaTableRow() {
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [isOpeningNewTab, setIsOpeningNewTab] = useState(true);

  return (
    <tr>
      <td className="table-td">
        <p className="flex items-center gap-2 font-bold">
          <FaFacebook aria-hidden /> Facebook
        </p>
      </td>
      <td className="table-td">
        <FormField
          type="input"
          inputType="text"
          defaultValue="https://www.instagram.com/?hl=en"
        />
      </td>
      <td className="table-td">
        <ToggleButton
          isToggled={isLinkVisible}
          onChange={() => setIsLinkVisible((prev) => !prev)}
        />
      </td>
      <td className="table-td">
        <ToggleButton
          isToggled={isOpeningNewTab}
          onChange={() => setIsOpeningNewTab((prev) => !prev)}
        />
      </td>
      <TableActions
        hasDeleteAction
        hasViewAction={false}
        hasEditAction={false}
      />
    </tr>
  );
}
