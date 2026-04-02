import HeroBanner from "@/components/HeroBanner";
import CleaningQuote from "@/components/services/CleaningQuote";
import RecurringSection from "@/components/services/RecurringSection";
import SpecialitySection from "@/components/services/SpecialitySection";
import SupportSection from "@/components/services/SupportSection";
import SurfacesSection from "@/components/services/SurfacesSection";

export default function page() {
  return (
    <main>
        <HeroBanner title="Services" pageName="Services"/>
        <RecurringSection/>
        <SpecialitySection/>
        <SurfacesSection/>
        <SupportSection/>
        <CleaningQuote/>
    </main>
  )
}
