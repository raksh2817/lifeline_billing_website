import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const clientLogos = [
  '/images/clients/Logo-Client-1.png',
  '/images/clients/Logo-Client-2.png',
  '/images/clients/Logo-Client-3.png',
  '/images/clients/Logo-Client-4.png',
  '/images/clients/Logo-Client-5.png',
];

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8fafc]">
      <Container>
        <SectionHeader 
          eyebrow="Trusted By" 
          title="Healthcare Providers Nationwide" 
          className="text-center mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={logo} 
                alt={`Client ${index + 1}`}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
