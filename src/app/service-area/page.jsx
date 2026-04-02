import HeroBanner from "@/components/HeroBanner";
import Available from "@/components/service-area/Available";
import Coverage from "@/components/service-area/Coverage";
import Foundation from "@/components/service-area/Foundation";

export default function ServieArea() {
  return (
    <main>
       <HeroBanner title="Locations" pageName="Locations"/>
        <Foundation/>
        <Coverage/>
        <Available/>
    </main>
  )
}
