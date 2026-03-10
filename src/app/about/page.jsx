import BestCustomerReviews from '@/components/about/BestCustomerReviews'
import ExpertiseSection from '@/components/about/ExpertiseSection'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import HeroBanner from '@/components/HeroBanner'
import MarqueHighlightText from '@/components/MarqueHighlightText'

export default function AboutUs() {
  return (
    <main>
        <HeroBanner title="About Us" pageName="About"/>
        <ExpertiseSection/> <MarqueHighlightText marqueeText="Making Every Corner Shine. Professional Cleaning You Can Trust! Your Space, Our Care. Experience the Clean Difference. Making Every Corner Shine. Professional Cleaning You Can Trust! Your Space, Our Care. Experience the Clean Difference."/>
        <WhyChooseUs/>
        <BestCustomerReviews/>
    </main>
  )
}
