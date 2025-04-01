
import React from 'react';
import { ShieldCheck, Users, Award, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const team = [
  {
    name: 'Ritika Bansal',
    role: 'Team Member',
    bio: 'Contributes to the company vision and strategy with expertise in home services.',
    image: '/lovable-uploads/19e9f938-c320-41c8-b6ed-6020e05a7d54.png',
  },
  {
    name: 'Harsh Garg',
    role: 'Team Member',
    bio: 'Focuses on operations and ensures service excellence across all departments.',
    image: '/lovable-uploads/d2a59c89-22d1-44ac-bcbe-9c035f3e0e3b.png',
  },
  {
    name: 'Karan Kumar',
    role: 'Team Member',
    bio: 'Expert in technology solutions that connect customers with service providers seamlessly.',
    image: '/lovable-uploads/51cba0b9-293c-4961-9971-de635051f5c1.png',
  },
  {
    name: 'Saanya',
    role: 'Team Member',
    bio: 'Dedicated to ensuring every customer receives exceptional service and support.',
    image: '/lovable-uploads/8c9eedc8-b309-4255-aa1a-12b31749b136.png',
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'We prioritize building and maintaining trust through reliable service and transparent pricing.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in strengthening our communities by providing employment and excellent service.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to exceeding expectations with professional, high-quality workmanship.'
  },
  {
    icon: Briefcase,
    title: 'Professionalism',
    description: 'Our team approaches every job with respect, punctuality, and attention to detail.'
  }
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Homie Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner for all home service needs since 2025.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Homie Services began with a simple idea: make home services accessible, affordable, and reliable for everyone. Founded in 2025 by a group of friends who experienced firsthand the challenges of finding trustworthy service providers, we set out to create a solution.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation with just five service professionals has grown into a network of over 200 verified experts across multiple service categories. Our journey has been guided by our commitment to quality, trust, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, Homie Services is a leading home service provider in the region, connecting thousands of homeowners with skilled professionals every month. Our mission remains the same: to simplify home maintenance and improvement by bringing the best professionals to your doorstep.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                  alt="Team meeting" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-gray-800">Since 2025</p>
                <p className="text-gray-700">providing excellent service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Homie Services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated people behind Homie Services who work every day to bring you the best service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">200+</p>
              <p className="text-lg">Professionals</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-lg">Completed Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
