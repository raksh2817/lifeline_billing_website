import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/CTA';

const caqhServices = [
  {
    title: "What is CAQH",
    description: "CAQH (Council for Affordable Quality Healthcare) is a non-profit alliance that helps reduce the administrative burden of healthcare providers by streamlining credentialing processes.",
    image: "/images/services/caqh/What-is-CAQH.jpg"
  },
  {
    title: "CAQH Attestation",
    description: "We handle the complete CAQH attestation process, ensuring all required information is accurately submitted and maintained for timely provider enrollment.",
    image: "/images/services/caqh/CAQH-Attestation-1.jpg"
  },
  {
    title: "CAQH Maintenance",
    description: "Regular CAQH maintenance and updates are crucial to keep your credentials current. We manage all updates and ensure compliance with payer requirements.",
    image: "/images/services/caqh/CAQH-Maintenance-1.jpg"
  },
  {
    title: "Importance of Timely CAQH Attestation",
    description: "Timely CAQH attestation prevents delays in provider enrollment and ensures uninterrupted participation with insurance networks. We ensure all deadlines are met.",
    image: "/images/services/caqh/Importance-of-timely-CAQH-Attestation.jpg"
  }
];

export default function CAQHServices() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-20 md:py-28 lg:py-36 bg-primary dot-pattern relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 129, 64, 0.85), rgba(12, 129, 64, 0.85)), url(/images/services/CAQH.jpg)'
        }}
      >
        <Container className="text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
              CAQH Services
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.1] mb-7">
              Comprehensive CAQH Management Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-[1.7]">
              Streamline your provider credentialing with our expert CAQH attestation and maintenance services.
            </p>
          </div>
        </Container>
      </section>

      {/* CAQH Services */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <SectionHeader 
            eyebrow="Our CAQH Services" 
            title="Complete CAQH Solutions" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caqhServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
