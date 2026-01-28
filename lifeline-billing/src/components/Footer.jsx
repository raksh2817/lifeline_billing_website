import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import Container from './ui/Container';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/contact' },
];

const serviceLinks = [
  { name: 'Medical Billing', path: '/services' },
  { name: 'Credentialing', path: '/services' },
  { name: 'CAQH Services', path: '/services' },
  { name: 'Accounts Receivable', path: '/services' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img 
                src="/white-logo.svg" 
                alt="Life Line Billing Solutions" 
                className="h-10 w-auto"
              />
              <div>
                <span className="font-semibold text-white text-lg">Life Line</span>
                <span className="text-white/70 text-sm block -mt-1">Billing Solutions</span>
              </div>
            </div>
            <p className="text-[15px] text-white/70 max-w-[280px] mb-6 leading-relaxed">
              A Life Line for your RCM needs. Professional Revenue Cycle Management 
              services for healthcare providers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[15px] text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[15px] text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white/50 mt-1 flex-shrink-0" />
                <span className="text-[15px] text-white/70">
                  (630) 560-1319
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white/50 mt-1 flex-shrink-0" />
                <span className="text-[15px] text-white/70">
                  admin@lifelinebilling.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/50 mt-1 flex-shrink-0" />
                <span className="text-[15px] text-white/70">
                  2201 Long Prairie Rd,<br />
                  Flower Mound,
                  Texas, 75022<br />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-sm text-white/50 text-center">
            © 2026 Life Line Billing Solutions Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
