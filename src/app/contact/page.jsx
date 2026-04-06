import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/Contactinfo";
import ContactMap from "@/components/contact/ContactMap";
import HeroBanner from "@/components/HeroBanner";

export default function Contact() {
  return (
    <main>
      <HeroBanner title="Get a Fast, Free Cleaning Quote"  desc="Tell us about your facility and we'll be in touch within 24 hours.
" />
      {/* Form + Info Section */}
      <section className="container py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <section className="container pb-16 md:pb-20 lg:pb-24">
        <ContactMap/>
      </section>
      
    </main>
  );
}
