
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Hammer, Brush, Car, Star, CheckCircle, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: Wrench,
    description: 'Expert plumbing services for repairs, installations, and maintenance.'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: Zap,
    description: 'Professional electrical services to keep your home safely powered.'
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    icon: Hammer,
    description: 'Skilled carpentry work for repairs, installations, and custom projects.'
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    icon: Brush,
    description: 'Thorough cleaning and housekeeping services for a spotless home.'
  },
  {
    id: 'car-cleaning',
    title: 'Car Cleaning',
    icon: Car,
    description: 'Professional car cleaning services to keep your vehicle looking new.'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'Plumbing',
    rating: 5,
    comment: 'The plumber was punctual, professional, and solved my issue quickly. Highly recommend!'
  },
  {
    id: 2,
    name: 'Rajiv Mehta',
    service: 'Electrical',
    rating: 5,
    comment: 'Excellent service! The electrician identified and fixed the problem in my wiring efficiently.'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    service: 'Housekeeping',
    rating: 4,
    comment: 'The housekeeping team did a thorough job. My home looks and feels fresh again.'
  }
];

const features = [
  {
    icon: CheckCircle,
    title: 'Certified Professionals',
    description: 'All our workers are certified, skilled, and thoroughly vetted.'
  },
  {
    icon: Clock,
    title: 'On-time Service',
    description: 'We value your time and ensure our professionals arrive as scheduled.'
  },
  {
    icon: Package,
    title: 'Quality Materials',
    description: 'We use only high-quality materials for all repairs and installations.'
  }
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-32 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fast. Reliable. Trusted.
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We love providing a great service that people can be satisfied with, always ensuring 
              professionalism, efficiency, and trust on every job. Whether you need repairs or home 
              improvement, we've got you covered!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/request-service">
                <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90 font-semibold py-6 px-8 text-lg">
                  Request a Service
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold py-6 px-8 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional home services to keep your home running smoothly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <service.icon className="service-icon" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={`/services/${service.id}`}>
                  <Button variant="link" className="p-0 text-primary group-hover:underline">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-primary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality service with professionalism and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Service: {testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="link" className="text-primary">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a service today and experience the Homie Services difference.
          </p>
          <Link to="/request-service">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request a Service Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
