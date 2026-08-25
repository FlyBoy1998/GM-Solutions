import TabButton from "./TabButton";

import { settingsTabs } from "../../../constants/data";

export default function SettingsTabs() {
  return (
    <nav className="col-span-full flex gap-4 px-4 rounded-lg shadow-md bg-white">
      {settingsTabs.map((tab) => (
        <TabButton key={tab.label} tab={tab} />
      ))}
    </nav>
  );
}
