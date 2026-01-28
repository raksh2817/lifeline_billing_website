import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-[#f8fafc]">
      <Container>
        <SectionHeader 
          eyebrow="FAQ" 
          title="Frequently Asked Questions" 
        />

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-border rounded-xl mb-4 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left"
              >
                <span className="text-[17px] font-medium text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-base text-muted leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
