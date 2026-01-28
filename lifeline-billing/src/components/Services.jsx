import { Receipt, ClipboardCheck, ShieldCheck, TrendingUp, FileSearch, BarChart3 } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { services } from '../data/services';

const iconMap = {
  Receipt,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  FileSearch,
  BarChart3,
};

export default function Services() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeader 
          eyebrow="Our Services" 
          title="Comprehensive RCM Solutions" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={iconMap[service.icon]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
