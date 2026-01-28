import Container from './ui/Container';
import Button from './ui/Button';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-primary dot-pattern">
      <Container className="text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight mb-5">
            Ready to Streamline Your Revenue Cycle?
          </h2>
          <p className="text-lg text-white/85 leading-[1.7] mb-10">
            Get in touch with us today to learn how we can help streamline your 
            billing process and maximize your revenue.
          </p>
          <Button to="/contact" variant="white" className="px-10 py-4 text-[17px]">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
}
