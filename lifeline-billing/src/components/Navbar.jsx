import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`sticky top-0 z-50 h-20 bg-white border-b transition-shadow duration-300 ${
        isScrolled ? 'shadow-md border-transparent' : 'border-black/[0.06]'
      }`}
    >
      <div className="h-full flex items-center justify-between w-full">
        {/* Logo - Left side completely flush */}
        <Link to="/" className="flex items-center h-full flex-shrink-0">
          <img 
            src="/colour-logo.svg" 
            alt="Life Line Billing Solutions" 
            className="h-20 md:h-24 lg:h-28 w-auto block"
            style={{ display: 'block', margin: 0 }}
          />
        </Link>

        {/* Desktop Navigation - Right side */}
        <div className="hidden lg:flex items-center gap-10 flex-shrink-0 pr-3 md:pr-4 lg:pr-6">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-body hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button to="/contact" className="ml-8">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-body hover:text-primary transition-colors flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
          <Container className="py-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-body hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button to="/contact" className="mt-4 w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
