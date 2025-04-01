
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { UserRound, Users, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [tab, setTab] = useState('customer');
  
  const [customerLogin, setCustomerLogin] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [workerLogin, setWorkerLogin] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCustomerLogin(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleWorkerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setWorkerLogin(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Customer login submitted:', customerLogin);
    
    toast({
      title: "Login Successful!",
      description: "Welcome back to Homie Services.",
    });
  };

  const handleWorkerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Worker login submitted:', workerLogin);
    
    toast({
      title: "Worker Login Successful!",
      description: "Welcome to your worker dashboard.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-center mb-6">Log In to Homie Services</h1>
              
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
                      <Label htmlFor="customerEmail">Email</Label>
                      <Input
                        id="customerEmail"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={customerLogin.email}
                        onChange={handleCustomerChange}
                        required
                        autoComplete="email"
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
                          value={customerLogin.password}
                          onChange={handleCustomerChange}
                          required
                          autoComplete="current-password"
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="customerRememberMe"
                          name="rememberMe"
                          checked={customerLogin.rememberMe}
                          onCheckedChange={(checked) => 
                            setCustomerLogin(prev => ({ ...prev, rememberMe: checked === true }))
                          }
                        />
                        <Label htmlFor="customerRememberMe" className="text-sm">Remember me</Label>
                      </div>
                      <a href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Log In
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary hover:underline">
                        Sign Up
                      </Link>
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="worker">
                  <form onSubmit={handleWorkerSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="workerEmail">Email</Label>
                      <Input
                        id="workerEmail"
                        name="email"
                        type="email"
                        placeholder="provider@example.com"
                        value={workerLogin.email}
                        onChange={handleWorkerChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workerPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="workerPassword"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={workerLogin.password}
                          onChange={handleWorkerChange}
                          required
                          autoComplete="current-password"
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
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="workerRememberMe"
                          name="rememberMe"
                          checked={workerLogin.rememberMe}
                          onCheckedChange={(checked) => 
                            setWorkerLogin(prev => ({ ...prev, rememberMe: checked === true }))
                          }
                        />
                        <Label htmlFor="workerRememberMe" className="text-sm">Remember me</Label>
                      </div>
                      <a href="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Log In
                    </Button>
                    
                    <p className="text-center text-sm text-gray-600">
                      Not registered as a provider?{" "}
                      <Link to="/join-as-worker" className="text-primary hover:underline">
                        Join Now
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

export default Login;
