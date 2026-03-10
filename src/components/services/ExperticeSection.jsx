import ButtonSolid from '../ButtonSolid'
import CommonHeading from '../CommonHeading'

export default function ExperticeSection() {
  return (
    <section className='container mt-16'>
        <CommonHeading center={true} title="Expertise" heading="Commercial cleaning done right" subHeading="We handle every facility type across NYC with precision and accountability."/>
        <div className="flex gap-8 justify-center mt-11">
                  <ButtonSolid> Quote</ButtonSolid>
                  <ButtonSolid color="white">Call</ButtonSolid>
                </div>
    </section>
  )
}
