import { Settings, ShieldCheck } from "lucide-react";

import MaintenanceBenefitItem from "./MaintenanceBenefitItem";

export default function MaintenanceBenefit() {
  return (
    <div className="flex gap-4 max-sm:flex-col">
      <MaintenanceBenefitItem icon={Settings} title="Improving performance" />
      <MaintenanceBenefitItem
        icon={ShieldCheck}
        title="Enhancing your experience"
      />
    </div>
  );
}
