import { Receipt, ClipboardCheck, ShieldCheck, TrendingUp, FileSearch, BarChart3, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/CTA';

const services = [
  {
    icon: Receipt,
    title: "Medical Billing",
    description: "Our comprehensive medical billing services ensure accurate and timely claim submission, maximizing your revenue and minimizing denials.",
    features: [
      "Clean claim submission with 99.5% accuracy",
      "Rapid turnaround on claim processing",
      "Real-time eligibility verification",
      "Detailed reporting and analytics",
      "Denial management and appeals"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Credentialing Services",
    description: "We handle the entire credentialing process, ensuring your providers are enrolled with all necessary payers quickly and efficiently.",
    features: [
      "Initial credentialing for new providers",
      "Re-credentialing and maintenance",
      "Payer enrollment and contracting",
      "License and certification tracking",
      "Delegated credentialing support"
    ]
  },
  {
    icon: ShieldCheck,
    title: "CAQH Management",
    description: "Keep your CAQH profiles current and compliant with our comprehensive CAQH management services.",
    features: [
      "Initial CAQH registration and setup",
      "Quarterly attestation management",
      "Document uploading and verification",
      "Profile accuracy review",
      "Revalidation reminders and support"
    ]
  },
  {
    icon: TrendingUp,
    title: "Accounts Receivable",
    description: "Our dedicated AR team works diligently to reduce your aging accounts and improve cash flow.",
    features: [
      "Aggressive follow-up on unpaid claims",
      "Insurance and patient collections",
      "Payment posting and reconciliation",
      "Aging report analysis",
      "Collection agency coordination"
    ]
  },
  {
    icon: FileSearch,
    title: "Medical Coding",
    description: "Our certified coders ensure accurate code assignment for maximum reimbursement and compliance.",
    features: [
      "ICD-10-CM/PCS coding",
      "CPT and HCPCS coding",
      "Modifier selection and application",
      "Coding compliance audits",
      "Coder education and updates"
    ]
  },
  {
    icon: BarChart3,
    title: "Audit & Analysis",
    description: "Comprehensive audits and analysis to identify revenue opportunities and ensure compliance.",
    features: [
      "Revenue cycle assessment",
      "Coding compliance audits",
      "Charge capture analysis",
      "Denial trend analysis",
      "Customized reporting dashboards"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-primary dot-pattern">
        <Container className="text-center">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
              Our Services
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.1] mb-7">
              Comprehensive Revenue Cycle Management
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-[1.7]">
              From billing to credentialing, we offer a full suite of RCM services 
              designed to optimize your revenue and reduce administrative burden.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-[36px] font-semibold text-dark leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-body leading-[1.8] mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-primary-light rounded-3xl p-10 lg:p-14 aspect-square flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#f8fafc]">
        <Container>
          <SectionHeader 
            eyebrow="Our Process" 
            title="How We Work With You" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your current processes and identify opportunities for improvement." },
              { step: "02", title: "Integration", description: "Seamless integration with your existing systems and workflows." },
              { step: "03", title: "Implementation", description: "Our team takes over your billing operations with minimal disruption." },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement to maximize your revenue." }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
