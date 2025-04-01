
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Zap, Hammer, Brush, Car, PaintBucket, Paintbrush, Scissors,
  Shovel, Fan, Thermometer, Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: Wrench,
    description: 'Expert plumbing services for repairs, installations, and maintenance.',
    features: ['Pipe repairs', 'Fixture installation', 'Drain cleaning', 'Water heater repairs']
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: Zap,
    description: 'Professional electrical services to keep your home safely powered.',
    features: ['Wiring repairs', 'Fixture installation', 'Panel upgrades', 'Safety inspections']
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    icon: Hammer,
    description: 'Skilled carpentry work for repairs, installations, and custom projects.',
    features: ['Furniture repair', 'Cabinet installation', 'Door repairs', 'Custom woodwork']
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    icon: Brush,
    description: 'Thorough cleaning and housekeeping services for a spotless home.',
    features: ['Deep cleaning', 'Regular maintenance', 'Move-in/out cleaning', 'Special event prep']
  },
  {
    id: 'car-cleaning',
    title: 'Car Cleaning',
    icon: Car,
    description: 'Professional car cleaning services to keep your vehicle looking new.',
    features: ['Exterior wash', 'Interior detailing', 'Waxing & polishing', 'Engine cleaning']
  },
  {
    id: 'painting',
    title: 'Painting',
    icon: PaintBucket,
    description: 'Professional painting services for interior and exterior surfaces.',
    features: ['Interior painting', 'Exterior painting', 'Trim & detail work', 'Color consultation']
  },
  {
    id: 'gardening',
    title: 'Gardening',
    icon: Shovel,
    description: 'Expert gardening services to maintain and beautify your outdoor spaces.',
    features: ['Lawn maintenance', 'Planting & pruning', 'Landscape design', 'Vegetable gardens']
  },
  {
    id: 'hvac',
    title: 'HVAC Service',
    icon: Thermometer,
    description: 'Comprehensive heating, ventilation, and air conditioning services.',
    features: ['AC repair', 'Heater maintenance', 'System installation', 'Air quality checks']
  },
  {
    id: 'salon',
    title: 'Home Salon',
    icon: Scissors,
    description: 'Professional salon services in the comfort of your own home.',
    features: ['Haircuts', 'Styling', 'Coloring', 'Manicure & pedicure']
  }
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From plumbing and electrical work to cleaning and car care, we provide a wide range of professional services to keep your home running smoothly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <service.icon className="service-icon" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-4 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link to={`/request-service?service=${service.id}`}>
                    <Button className="btn-primary w-full">Book Service</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for custom services or specific requirements not listed above.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
