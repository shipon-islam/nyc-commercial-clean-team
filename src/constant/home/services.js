import brush from "@/assets/home/services/brush.png";
import dayPorter from "@/assets/home/services/day-porter.webp";
import floorCare from "@/assets/home/services/floor-care.webp";
import girlCleaning from "@/assets/home/services/girl-cleaner.png";
import moping from "@/assets/home/services/moping.png";
import officeClean from "@/assets/home/services/office-cleaning.webp";
import windowClean from "@/assets/home/services/window-cleaning.webp";

export const services = [
  {
    id: 1,
    image: officeClean,
    title: "Core",
    heading: "Office cleaning",
    desc: "Professional spaces kept spotless and ready for business.",
  },
  {
    id: 2,
    image: windowClean,
    overlayImage: moping,
    title: "Specialty",
    heading: "Window cleaning",
    desc: "Crystal clear glass from ground to roofline.",
  },
  {
    id: 3,
    image: dayPorter,
    overlayImage: girlCleaning,
    title: "Core",
    heading: "Day porter services",
    desc: "On-site support throughout your business day.",
  },
  {
    id: 4,
    image: floorCare,
    overlayImage: brush,
    title: "Core",
    heading: "Floor and carpet care",
    desc: "Restoration and maintenance for all floor surfaces.",
  },
];
