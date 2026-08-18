import {
  Clock,
  Folder,
  FolderIcon,
  Bath,
  Home,
  CookingPot,
  FolderOpenDot,
  MapPin,
  Calendar,
  RulerDimensionLine,
  Banknote,
  ShieldPlus,
  UserPen,
  Settings,
  Info,
  Contact,
} from "lucide-react";

import serviceCardKitchenImg from "../../public/images/service-card-kitchen.jpg";
import serviceCardBathroomImg from "../../public/images/service-card-bathroom.jpg";
import serviceCardFullHomeImg from "../../public/images/service-card-full-home.jpg";

export const heroStats = [
  { label: "Projects completed", value: "100+", icon: Folder },
  { label: "Experience", value: "10+ Years", icon: Clock },
];

export const serviceHighlights = [
  {
    title: "On-Time Delivery",
    description: "We respect your time and schedule.",
    icon: Clock,
  },
  {
    title: "Transparent Process",
    description: "Clear communication at every step.",
    icon: ShieldPlus,
  },
  {
    title: "Customer Focused",
    description: "Your satisfaction is our priority.",
    icon: UserPen,
  },
];

export const serviceCards = [
  {
    title: "Kitchen Renovation",
    description:
      "Custom kitchens that combine timeless design and exceptional craftsmanship.",
    imgUrl: serviceCardKitchenImg,
    icon: CookingPot,
  },
  {
    title: "Bathroom Renovation",
    description: "Elegant bathrooms crafted with premium finishes and comfort.",
    imgUrl: serviceCardBathroomImg,
    icon: Bath,
  },
  {
    title: "Full Home Renovation",
    description:
      "Complete home transformations tailored to your lifestyle, needs and vision.",
    imgUrl: serviceCardFullHomeImg,
    icon: Home,
  },
];

export const defaultMapZoom = 11;
export const mapAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export const mapTileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
export const projectZoom = 12;
export const londonCoordinates = [51.5074, -0.1278];

export const projectFilters = [
  {
    label: "All Projects",
    value: "all",
    icon: FolderIcon,
  },
  {
    label: "Kitchen",
    value: "kitchen",
    icon: CookingPot,
  },
  {
    label: "Bathroom",
    value: "bathroom",
    icon: Bath,
  },
  {
    label: "Full Home",
    value: "full-home",
    icon: Home,
  },
];

export const projectDetailIcons = {
  "Project Type": FolderOpenDot,
  Location: MapPin,
  "Completion Date": Calendar,
  Duration: Clock,
  "Project Size": RulerDimensionLine,
  "Budget Range": Banknote,
};

export const projectTypeOptions = [
  { value: "bathroom", label: "Bathroom Renovation" },
  { value: "kitchen", label: "Kitchen Renovation" },
  { value: "full-home", label: "Full Home Renovation" },
];

export const projectStatusOptions = [
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "draft", label: "Draft" },
];

export const chartServiceCategories = [
  {
    label: "Kitchen",
    chartLabel: "Kitchen Renovation",
    color: "rgb(194, 106, 51)",
  },
  {
    label: "Bathroom",
    chartLabel: "Bathroom Renovation",
    color: "rgb(74, 128, 145)",
  },
  {
    label: "Full home",
    chartLabel: "Full Home Renovation",
    color: "rgb(126, 108, 91)",
  },
];

export const mediaTypesOptions = [
  { value: "images", label: "Images" },
  { value: "videos", label: "Videos" },
  { value: "documents", label: "Documents" },
];

export const mediaCategories = [
  {
    label: "Images",
    color: "rgb(166, 81, 34)",
  },
  {
    label: "Videos",
    color: "rgb(218, 195, 173)",
  },
  {
    label: "Documents",
    color: "rgb(46, 40, 29)",
  },
];

export const quickTips = [
  "Use descriptive filenames so files are easy to find.",
  "Compress large images to improve website performance.",
  "Use images at least 1920px wide for best results.",
  "Check file storage regularly.",
  "Use JPG/WebP for photos, PNG for transparency, and MP4 for videos.",
];

export const leadsStatuses = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "consultation", label: "Consultation" },
  { value: "converted", label: "Converted" },
];

export const leadsSources = [
  { value: "website", label: "Website" },
  { value: "instagram", label: "Instagram" },
  { value: "email", label: "Email" },
  { value: "other", label: "Other" },
];

export const settingsTabs = [
  {
    to: "",
    icon: Settings,
    label: "General",
    end: true,
  },
  {
    to: "site-information",
    icon: Info,
    label: "Site Information",
  },
  {
    to: "contact",
    icon: Contact,
    label: "Contact & Social",
  },
];
