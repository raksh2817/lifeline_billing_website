import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <Container>
        <SectionHeader 
          eyebrow="Testimonials" 
          title="What Our Clients Say" 
        />

        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-14 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary-light mb-6" />

            {/* Quote Text */}
            <p className="text-lg md:text-[22px] text-body leading-[1.8] mb-8">
              "{current.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-dark">
                  {current.author}
                </div>
                <div className="text-[15px] text-muted">
                  {current.title}
                </div>
              </div>

              {/* Navigation Arrows */}
              {testimonials.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
