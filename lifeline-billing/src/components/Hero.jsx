import Container from './ui/Container';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section 
      className="min-h-[90vh] md:min-h-[80vh] bg-primary dot-pattern flex items-center py-24 md:py-32 lg:py-40 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(12, 129, 64, 0.85), rgba(12, 129, 64, 0.85)), url(/images/home-page-banner.jpg)'
      }}
    >
      <Container className="text-center relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Eyebrow */}
          <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
            A Life Line for your RCM needs
          </p>

          {/* Main Headline */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold text-white leading-[1.1] mb-7">
            Professional Revenue Cycle Management Solutions
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/85 leading-[1.7] max-w-[650px] mx-auto mb-12">
            Streamline your healthcare revenue cycle with our expert medical billing, 
            coding, and credentialing services. Trusted by healthcare providers nationwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="white" className="px-8 py-4">
              Get Started
            </Button>
            <Button to="/services" variant="secondary" className="px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
