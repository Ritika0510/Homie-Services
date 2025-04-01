
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { UserRound, Users, Eye, EyeOff, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Signup: React.FC = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState('customer');
  
  const [customerSignup, setCustomerSignup] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [workerSignup, setWorkerSignup] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    serviceCategory: '',
    experience: '',
    agreeToTerms: false
  });

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCustomerSignup(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleWorkerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setWorkerSignup(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (customerSignup.password !== customerSignup.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Customer signup submitted:', customerSignup);
    
    toast({
      title: "Account Created!",
      description: "Welcome to Homie Services. You can now log in to your account.",
    });
  };

  const handleWorkerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (workerSignup.password !== workerSignup.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Worker signup submitted:', workerSignup);
    
    toast({
      title: "Application Received!",
      description: "Thank you for applying. We'll review your application and contact you soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
              
              <Tabs defaultValue="customer" value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="customer" className="flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    <span>Customer</span>
                  </TabsTrigger>
                  <TabsTrigger value="worker" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Service Provider</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="customer">
                  <form onSubmit={handleCustomerSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name</Label>
                      <Input
                        id="customerName"
                        name="name"
                        placeholder="John Doe"
                        value={customerSignup.name}
                        onChange={handleCustomerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customerEmail">Email</Label>
                      <Input
                        id="customerEmail"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={customerSignup.email}
                        onChange={handleCustomerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customerPhone">Phone Number</Label>
                      <Input
                        id="customerPhone"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={customerSignup.phone}
                        onChange={handleCustomerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customerPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="customerPassword"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={customerSignup.password}
                          onChange={handleCustomerChange}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customerConfirmPassword">Confirm Password</Label>
                      <Input
                        id="customerConfirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={customerSignup.confirmPassword}
                        onChange={handleCustomerChange}
                        required
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="customerAgreeToTerms"
                        name="agreeToTerms"
                        checked={customerSignup.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setCustomerSignup(prev => ({ ...prev, agreeToTerms: checked === true }))
                        }
                        required
                      />
                      <Label htmlFor="customerAgreeToTerms" className="text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary" disabled={!customerSignup.agreeToTerms}>
                      Create Account
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary hover:underline">
                        Log In
                      </Link>
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="worker">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          Apply to join our network of trusted service providers. After review, we'll contact you for verification and onboarding.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleWorkerSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="workerName">Full Name</Label>
                      <Input
                        id="workerName"
                        name="name"
                        placeholder="Jane Smith"
                        value={workerSignup.name}
                        onChange={handleWorkerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workerEmail">Email</Label>
                      <Input
                        id="workerEmail"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={workerSignup.email}
                        onChange={handleWorkerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workerPhone">Phone Number</Label>
                      <Input
                        id="workerPhone"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={workerSignup.phone}
                        onChange={handleWorkerChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="serviceCategory">Service Category</Label>
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={workerSignup.serviceCategory}
                        onChange={handleWorkerChange}
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="car-cleaning">Car Cleaning</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <select
                        id="experience"
                        name="experience"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={workerSignup.experience}
                        onChange={handleWorkerChange}
                        required
                      >
                        <option value="" disabled>Select years of experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">More than 10 years</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workerPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="workerPassword"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={workerSignup.password}
                          onChange={handleWorkerChange}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workerConfirmPassword">Confirm Password</Label>
                      <Input
                        id="workerConfirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={workerSignup.confirmPassword}
                        onChange={handleWorkerChange}
                        required
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="workerAgreeToTerms"
                        name="agreeToTerms"
                        checked={workerSignup.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setWorkerSignup(prev => ({ ...prev, agreeToTerms: checked === true }))
                        }
                        required
                      />
                      <Label htmlFor="workerAgreeToTerms" className="text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>, <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, and <a href="/provider-agreement" className="text-primary hover:underline">Service Provider Agreement</a>
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary" disabled={!workerSignup.agreeToTerms}>
                      Submit Application
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600">
                      Already registered as a provider?{" "}
                      <Link to="/login?tab=worker" className="text-primary hover:underline">
                        Log In
                      </Link>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Signup;
