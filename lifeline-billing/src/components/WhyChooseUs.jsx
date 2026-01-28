import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';

const stats = [
  { number: "99.5%", label: "Claim Accuracy" },
  { number: "500+", label: "Healthcare Providers" },
  { number: "20+", label: "Years Experience" },
  { number: "$50M+", label: "Revenue Recovered" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-primary-light">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary mb-3">
              Why Life Line
            </p>
            <h2 className="text-3xl md:text-[40px] font-semibold text-dark leading-[1.2] mb-6">
              Trusted by Healthcare Providers Nationwide
            </h2>
            <p className="text-lg text-body leading-[1.8] mb-8">
              With over two decades of experience in revenue cycle management, we've helped 
              hundreds of healthcare providers optimize their billing operations and 
              maximize revenue.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-base font-medium text-primary group"
            >
              Learn more about us 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-[15px] font-medium text-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
