import React, { useState } from 'react';
import { Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample review data
const reviewsData = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'Plumbing',
    date: '2023-10-15',
    rating: 5,
    comment: 'The plumber was punctual, professional, and solved my issue quickly. He explained everything clearly and even gave me tips on how to prevent the issue in the future. Will definitely use this service again!',
    response: 'Thank you for your kind words, Priya! We are glad we could help and look forward to serving you again.'
  },
  {
    id: 2,
    name: 'Rajiv Mehta',
    service: 'Electrical',
    date: '2023-09-28',
    rating: 5,
    comment: 'Excellent service! The electrician identified and fixed the problem in my wiring efficiently. I appreciated the attention to safety and the thorough clean-up afterward.',
    response: null
  },
  {
    id: 3,
    name: 'Ananya Patel',
    service: 'Housekeeping',
    date: '2023-10-05',
    rating: 4,
    comment: 'The housekeeping team did a thorough job. My home looks and feels fresh again. They were professional and efficient, though they arrived a bit later than scheduled.',
    response: 'Thank you for your feedback, Ananya. We apologize for the delay and have noted this to improve our scheduling. We are happy that you were pleased with the cleaning itself!'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    service: 'Carpentry',
    date: '2023-09-20',
    rating: 5,
    comment: 'The carpenter was incredibly skilled. He repaired my damaged furniture and it looks better than new. Great value for money and very professional service.',
    response: null
  },
  {
    id: 5,
    name: 'Neha Gupta',
    service: 'Car Cleaning',
    date: '2023-10-10',
    rating: 3,
    comment: 'The car cleaning was good but not exceptional. There were a few spots missed and I had to point them out. The cleaner was friendly and fixed the issues when I mentioned them.',
    response: 'We appreciate your honest feedback, Neha. We are continuously training our team to ensure consistent quality and will use your comments to improve our car cleaning service.'
  },
  {
    id: 6,
    name: 'Arjun Kapoor',
    service: 'Electrical',
    date: '2023-09-15',
    rating: 5,
    comment: 'Had an emergency electrical issue and they responded within an hour. The technician was knowledgeable and fixed the problem quickly. Extremely satisfied with the service.',
    response: null
  },
  {
    id: 7,
    name: 'Meera Joshi',
    service: 'Plumbing',
    date: '2023-10-02',
    rating: 4,
    comment: 'Good service overall. The plumber was skilled and fixed our leaking pipe efficiently. Pricing was transparent and reasonable.',
    response: null
  },
  {
    id: 8,
    name: 'Sanjay Kumar',
    service: 'Carpentry',
    date: '2023-09-25',
    rating: 5,
    comment: 'Exceptional work by the carpenter who built our custom shelves. The attention to detail was impressive and the finished product exceeded our expectations.',
    response: 'Thank you for the wonderful review, Sanjay! We are delighted that you are happy with your custom shelves. Your carpenter will be thrilled to hear your feedback.'
  },
];

const Reviews: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  // Filter and sort reviews
  const filteredReviews = reviewsData
    .filter(review => {
      // Filter by service type if not "all"
      if (filter !== 'all' && review.service.toLowerCase() !== filter) return false;
      
      // Filter by search term
      if (searchTerm && !review.comment.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !review.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      
      return true;
    })
    .sort((a, b) => {
      // Sort by date
      if (sortOrder === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortOrder === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortOrder === 'highest') {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });

  // Calculate average rating
  const totalRating = reviewsData.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = (totalRating / reviewsData.length).toFixed(1);

  // Count reviews by rating
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => {
    return {
      rating,
      count: reviewsData.filter(review => review.rating === rating).length,
      percentage: Math.round((reviewsData.filter(review => review.rating === rating).length / reviewsData.length) * 100)
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl max-w-2xl mx-auto">
            See what our customers have to say about their experience with Homie Services.
          </p>
        </div>
      </section>

      {/* Reviews Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:border-r md:border-gray-200">
                <h2 className="text-5xl font-bold text-primary mb-2">{averageRating}</h2>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-5 h-5 ${parseFloat(averageRating) >= star ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on {reviewsData.length} reviews</p>
              </div>
              
              <div className="col-span-2">
                <h3 className="font-semibold mb-4">Rating Distribution</h3>
                {ratingCounts.map((data) => (
                  <div key={data.rating} className="flex items-center mb-2">
                    <div className="flex items-center w-16">
                      <span className="mr-1">{data.rating}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 mx-2">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-right text-sm text-gray-500">
                      {data.count} ({data.percentage}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="text-gray-500 h-4 w-4" />
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Filter by service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="housekeeping">Housekeeping</SelectItem>
                    <SelectItem value="car cleaning">Car Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {review.service} • {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  
                  {review.response && (
                    <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary mt-4">
                      <p className="font-semibold text-sm mb-1">Response from Homie Services:</p>
                      <p className="text-gray-700 text-sm">{review.response}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No reviews found matching your criteria.</p>
                <Button variant="outline" onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                  setSortOrder('newest');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and let us help you with your home service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary" asChild>
              <a href="/request-service">Book a Service</a>
            </Button>
            <Button variant="outline" className="btn-outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
