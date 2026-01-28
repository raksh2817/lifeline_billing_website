import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { EMAILJS_CONFIG } from '../config/emailjs';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (248) 376-9822",
    link: "tel:+12483769822"
  },
  {
    icon: Mail,
    title: "Email",
    content: "admin@lifelinebilling.com",
    link: "admin@lifelinebilling.com"
  },
  {
    icon: MapPin,
    title: "Address",
    content: "2201 Long Prairie Rd, Flower Mound, Texas, 75022",
    link: null
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 8:00 AM - 6:00 PM EST",
    link: null
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in src/config/emailjs.js');
      }

      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters for admin notification
      const adminTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        message: formData.message,
        to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        reply_to: formData.email,
      };

      // Send email to admin
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        adminTemplateParams
      );

      // Send auto-reply confirmation to submitter (if template is configured)
      if (EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID && 
          EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID !== 'YOUR_AUTO_REPLY_TEMPLATE_ID') {
        const autoReplyParams = {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          message: formData.message,
          title: formData.message.substring(0, 50) + (formData.message.length > 50 ? '...' : ''), // First 50 chars for title
        };

        // Send auto-reply (don't wait for it, send in background)
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
          autoReplyParams
        ).catch(err => {
          // Log error but don't fail the form submission
          console.error('Auto-reply email failed:', err);
        });
      }

      // Success - show success message
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      // Error handling
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError(err.text || err.message || 'Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-20 md:py-28 lg:py-36 bg-primary dot-pattern relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 129, 64, 0.85), rgba(12, 129, 64, 0.85)), url(/images/contact-us-banner.jpg)'
        }}
      >
        <Container className="text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 mb-6">
              Contact Us
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold text-white leading-[1.1] mb-7">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-[1.7]">
              Ready to optimize your revenue cycle? Get in touch with our team 
              today to learn how we can help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">
                Send Us a Message
              </h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-red-800 mb-1">
                        Error Sending Message
                      </h3>
                      <p className="text-sm text-red-700">
                        {error}
                      </p>
                      <button
                        onClick={() => setError(null)}
                        className="mt-3 text-sm text-red-600 font-medium hover:underline"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="bg-primary-light rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-body">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                    }}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">
                        Practice/Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your practice and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-body leading-[1.8] mb-8">
                Have questions? We're here to help. Reach out to us through any of 
                the channels below, and our team will get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-dark mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-body hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-body whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 bg-primary-light rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                  <p className="text-sm text-muted">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-[#f8fafc]">
        <Container className="text-center">
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-lg text-body leading-[1.7] mb-8">
              Book a free 30-minute consultation with one of our RCM specialists 
              to discuss your specific needs.
            </p>
            <Button href="tel:+12483769822">
              Call +1 (248) 376-9822
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
