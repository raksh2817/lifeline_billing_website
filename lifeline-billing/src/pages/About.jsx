import { Users, Target, Award, Heart } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/CTA';

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We maintain a 99.5% claim accuracy rate through rigorous quality control and continuous training."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view ourselves as an extension of your team, committed to your success as if it were our own."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously improve our processes and stay current with industry changes and regulations."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with complete transparency and always put our clients' interests first."
  }
];


export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-20 md:py-28 lg:py-36 bg-primary dot-pattern relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 129, 64, 0.85), rgba(12, 129, 64, 0.85)), url(/images/about-us-banner.jpg)'
        }}
      >
        <Container className="text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
              About Us
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.1] mb-7">
              Your Trusted Partner in Revenue Cycle Management
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-[1.7]">
              For over two decades, Life Line Billing Solutions has been helping healthcare 
              providers optimize their billing operations and maximize revenue.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-[40px] font-semibold text-dark leading-[1.2] mb-6">
                Who we are
              </h2>
              <div className="space-y-4 text-lg text-body leading-[1.8]">
                <p>
                  At Life Line Billing Solutions, Inc. we are a trusted name in the medical billing industry with over two decades of experience. Our team of certified coders and experts is committed to delivering accurate medical coding, streamlined revenue cycle management, and efficient medical claims and accounts receivable management.
                </p>
                <p>
                  We pride ourselves on optimizing financial operations for healthcare providers, ensuring timely reimbursements, reducing denials, and maximizing revenue. Our patient billing solutions prioritize satisfaction and simplicity, offering flexible payment options, online bill pay, and personalized support.
                </p>
              </div>
            </div>
            <div className="bg-primary-light rounded-3xl p-10 lg:p-14">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm font-medium text-body">Years in Business</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm font-medium text-body">Providers Served</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-sm font-medium text-body">Claim Accuracy</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                  <div className="text-sm font-medium text-body">Revenue Recovered</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Patient Billing Solutions */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#f8fafc]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary mb-3">
              Patient Billing Solutions
            </p>
            <h2 className="text-3xl md:text-[40px] font-semibold text-dark leading-[1.2] mb-6">
              Simplifying Patient Billing
            </h2>
            <p className="text-lg text-body leading-[1.8] max-w-3xl mx-auto">
              Our patient billing solutions prioritize satisfaction and simplicity, offering flexible payment options, online bill pay, and personalized support to ensure a seamless experience for both healthcare providers and their patients.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <SectionHeader 
            eyebrow="Our Values" 
            title="What Drives Us Every Day" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Medical Team Image Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#f8fafc]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/medical/group-of-doctors-standing-in-corridor-on-medical-conference-e1623252293962.jpg"
                alt="Medical team in conference"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/medical/confident-doctor-shaking-patient-s-hand-e1623252367541.jpg"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/medical/medical-doctors-at-the-conference-E49QVN6.jpg"
                  alt="Medical doctors at conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
