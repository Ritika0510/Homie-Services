
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { id: 'plumbing', name: 'Plumbing' },
  { id: 'electrical', name: 'Electrical' },
  { id: 'carpentry', name: 'Carpentry' },
  { id: 'housekeeping', name: 'Housekeeping' },
  { id: 'car-cleaning', name: 'Car Cleaning' },
  { id: 'painting', name: 'Painting' },
  { id: 'gardening', name: 'Gardening' },
  { id: 'hvac', name: 'HVAC Service' },
  { id: 'salon', name: 'Home Salon' },
];

const RequestService: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const serviceFromURL = params.get('service');

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    service: serviceFromURL || '',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    description: '',
    urgent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request submitted:', formData);
    
    toast({
      title: "Service Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    // Reset form after submission (except service if coming from URL)
    setFormData({
      service: serviceFromURL || '',
      name: '',
      email: '',
      phone: '',
      address: '',
      date: '',
      time: '',
      description: '',
      urgent: false,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Request a Service</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below to schedule a service. We'll get back to you promptly to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type <span className="text-red-500">*</span></Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="123 Main St, City"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Describe your issue or service needed <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please provide details about the service you need..."
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="urgent"
                      name="urgent"
                      checked={formData.urgent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, urgent: checked === true }))
                      }
                    />
                    <Label htmlFor="urgent" className="font-medium text-red-600">
                      This is an urgent request (additional charges may apply)
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Submit Service Request
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="mt-10 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p>We'll review your service request and match you with the best professional for your needs.</p>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p>You'll receive a confirmation call or email within 2 hours (or sooner for urgent requests).</p>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p>Our professional will arrive at your location at the scheduled time to provide the service.</p>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <p>After the service is completed, you can provide feedback and ratings on your experience.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Need Immediate Assistance?</h2>
            <p className="text-gray-600 mt-2">Contact us directly:</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-sm text-gray-600">123 Main St, New Delhi, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-gray-600">8091275686, 9053022089</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-sm text-gray-600">Mon-Fri: 8AM-8PM, Sat: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestService;
