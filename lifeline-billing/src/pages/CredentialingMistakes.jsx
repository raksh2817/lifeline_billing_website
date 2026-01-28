import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/CTA';

const mistakes = [
  {
    title: "Poor Document Management",
    description: "Incomplete or disorganized documentation can lead to credentialing delays and denials. We help maintain organized, complete credentialing files.",
    image: "/images/credentialing/Poor-Document-Management.jpg"
  },
  {
    title: "Lack of Follow-up",
    description: "Failing to follow up on pending applications can result in missed deadlines and delayed provider enrollment. Our team ensures proactive follow-up.",
    image: "/images/credentialing/Lack-of-follow-up.jpg"
  },
  {
    title: "Incomplete Information",
    description: "Submitting incomplete applications leads to rejections and delays. We verify all required information before submission to ensure accuracy.",
    image: "/images/credentialing/Incomplete-information.jpg"
  },
  {
    title: "Missing Enclosures",
    description: "Missing required documents or enclosures can halt the credentialing process. We maintain checklists to ensure all documents are included.",
    image: "/images/credentialing/Missing-Enclosures.jpg"
  },
  {
    title: "No Proper Planning",
    description: "Lack of planning for credentialing deadlines can cause significant delays. We create timelines and track all deadlines to prevent issues.",
    image: "/images/credentialing/No-Proper-Planning.jpg"
  }
];

export default function CredentialingMistakes() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-20 md:py-28 lg:py-36 bg-primary dot-pattern relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 129, 64, 0.85), rgba(12, 129, 64, 0.85)), url(/images/services/Credentialing-Services.jpg)'
        }}
      >
        <Container className="text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
              Common Credentialing Mistakes
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.1] mb-7">
              Avoid These Common Credentialing Pitfalls
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-[1.7]">
              Learn about the most common credentialing mistakes and how we help you avoid them.
            </p>
          </div>
        </Container>
      </section>

      {/* Mistakes Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <SectionHeader 
            eyebrow="Common Mistakes" 
            title="What to Avoid in Credentialing" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={mistake.image} 
                    alt={mistake.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {mistake.title}
                  </h3>
                  <p className="text-body leading-relaxed text-sm">
                    {mistake.description}
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
