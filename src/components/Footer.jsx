import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold text-text-dark">
                Deepak Kumar
              </span>
              <span className="font-dm text-xs uppercase tracking-widest text-accent">
                Yoga Therapist
              </span>
            </Link>
            <p className="font-playfair italic text-text-muted text-lg">
              "Healing through the ancient science of yoga"
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-dm font-bold text-text-dark uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-text-muted hover:text-accent transition-colors">Home</Link>
              <Link to="/facilities" className="text-text-muted hover:text-accent transition-colors">Facilities</Link>
              <a href="/#contact" className="text-text-muted hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-dm font-bold text-text-dark uppercase tracking-wider text-sm">
              Connect
            </h4>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors flex items-center space-x-2"
            >
              <span>WhatsApp Message</span>
            </a>
            <p className="text-text-muted">Available for Online & Offline Sessions</p>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-light/20 text-center">
          <p className="text-text-muted text-sm font-dm">
            © {new Date().getFullYear()} Deepak Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
