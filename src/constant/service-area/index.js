import cleaningImg from "@/assets/serviceArea/floor-smoke-clean.webp";
import { CycleCircleIcon, GridIcon, ThreeDotIcon } from "@/components/Icon";
export const foundations = [
  {
    id: 1,
    slug: "built-on-experience-and-accountability",
    title: "Foundation",
    heading: "Built on experience and accountability",
    desc: "NYC Clean Team has maintained the highest standards of commercial cleaning across the city for twenty-five years. We are fully insured, background-checked, and licensed to serve the most demanding facilities in Manhattan, Brooklyn, Queens, the Bronx, and Long Island.",
    image:cleaningImg
  },
];

export const availableSteps = [
  {
    id: 1,
    slug:"janitorial-services",
    image: "/images/service-area/floor-moping.jpg",
    name: "Recurring",
    title: "Janitorial services",
    desc: "Daily cleaning, restocking, and facility maintenance",
  },
  {
    id: 4,
    slug:"office-cleaning",
    image: "/images/services/recurring/office-meet.png",
    icon: ThreeDotIcon,
    title: "Office cleaning",
    desc: "Comprehensive cleaning for corporate and professional spaces",
  },
  {
    id: 2,
    slug:"day-porter-services",
    image: "/images/services/recurring/wall-cleaning.jpg",
    icon: CycleCircleIcon,   
    title: "Day porter services",
    desc: "On-site support during business hours for immediate needs",
  },
  {
    id: 5,
    slug:"post-construction-cleaning",
    image: "/images/service-area/construction.jpg",
    name: "Specialty",
    title: "Post-construction cleaning",
    desc: "Complete debris removal and final site preparation",
  },
  {
    id: 3,
    slug:"carpet-cleaning",
    image: "/images/service-area/carpet.webp",
    name: "Surfaces",
    title: "Floor and carpet care",
    desc: "Stripping, waxing, and deep cleaning for all floor types.",
  },  
  {
    id: 6,
    slug:"window-cleaning",
    image: "/images/services/surface/glass.webp",
    icon: GridIcon,
    title: "Window cleaning",
    desc: "Professional glass and facade maintenance for high-rises",
  },
];