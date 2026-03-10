import carpet from "@/assets/services/support/carpet.webp";
import floor from "@/assets/services/support/floor.webp";

import windowClean from "@/assets/home/services/window-cleaning.webp";

export const surfaces = [
  {
    id: 1,
    image: floor,
    listView: true,
    title: "Floors",
    heading: "Floor strip and wax",
    desc: "Strip old finish and apply new protective wax coating",
  },
  {
    id: 2,
    image: carpet,
    listView: false,
    title: "Carpet",
    heading: "Carpet cleaning",
    desc: "Deep extraction removes embedded dirt and extends carpet life",
  },
  {
    id: 3,
    image: windowClean,
    listView: false,
    title: "Specialty",
    heading: "Window cleaning",
    desc: "Crystal clear glass from ground to roofline.",
  },
  
];
