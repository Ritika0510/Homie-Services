
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Your reliable partner for all home services. One call, Homie does it all!
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/plumbing" className="text-gray-600 hover:text-primary transition-colors">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="text-gray-600 hover:text-primary transition-colors">Electrical</Link></li>
              <li><Link to="/services/carpentry" className="text-gray-600 hover:text-primary transition-colors">Carpentry</Link></li>
              <li><Link to="/services/housekeeping" className="text-gray-600 hover:text-primary transition-colors">Housekeeping</Link></li>
              <li><Link to="/services/car-cleaning" className="text-gray-600 hover:text-primary transition-colors">Car Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-600 hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/join-as-worker" className="text-gray-600 hover:text-primary transition-colors">Join as Worker</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: ritika193bansal@gmail.com, harshji93061@gmail.com</li>
              <li>Phone: 8091275686, 9053022089</li>
              <li>Address: Rayat bahra university, Kharar, Punjab, 140301, India</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Homie Services. All rights reserved.
            <br />
            Created by Ritika Bansal, Harsh Garg, Karan Kumar, Saanya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
