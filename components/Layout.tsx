
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academics', path: '/academics' },
    { name: 'Events & Gallery', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-sgn-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link to="/" className="flex items-center gap-2">
                <div className="bg-sgn-gold text-sgn-navy w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">SGN</div>
                <span className="font-serif text-xl tracking-tight hidden md:block">SGN International School</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-sgn-gold ${
                    location.pathname === link.path ? 'text-sgn-gold' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-sgn-navy focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-blue-900 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-serif text-xl mb-4">SGN International</h3>
          <p className="text-sm leading-relaxed">
            Nurturing young minds to become global leaders of tomorrow through holistic education, ethical values, and creative thinking.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-sgn-gold transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sgn-gold transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-sgn-gold transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-sgn-gold transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/admissions" className="hover:text-sgn-gold transition-colors">Admission Process</Link></li>
            <li><Link to="/academics" className="hover:text-sgn-gold transition-colors">School Curriculum</Link></li>
            <li><Link to="/events" className="hover:text-sgn-gold transition-colors">School Calendar</Link></li>
            <li><Link to="/about" className="hover:text-sgn-gold transition-colors">Faculty Profiles</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt mt-1 mr-3 text-sgn-gold"></i>
              <span>123 Knowledge Park, Education Row, Metro City, 560001</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone mr-3 text-sgn-gold"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-3 text-sgn-gold"></i>
              <span>info@sgninternational.edu</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Newsletter</h4>
          <p className="text-xs mb-4">Stay updated with our latest news and events.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 border-none rounded-l px-4 py-2 text-sm w-full focus:ring-1 focus:ring-sgn-gold outline-none" 
            />
            <button className="bg-sgn-gold text-sgn-navy px-4 py-2 rounded-r font-bold text-sm">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} SGN International School. All Rights Reserved.
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
