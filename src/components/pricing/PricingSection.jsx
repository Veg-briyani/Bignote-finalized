import PropTypes from 'prop-types';
import { BookOpen, Award, Check, X } from 'lucide-react';

const PricingCard = ({ title, price, subtitle, features, isPopular }) => {
  // Function to handle redirection to contact page
  const handleChoosePlan = () => {
    window.location.href = '/contact'; // Change this URL to your actual contact page path
  };

  return (
    <div className={`relative overflow-hidden bg-white rounded-2xl shadow-lg border ${isPopular ? 'border-orange-500 transform scale-105' : 'border-gray-200'} p-0 transition-all duration-300 hover:shadow-xl group`}>
      {/* Header with background gradient */}
      <div className={`${isPopular ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-gray-700 to-gray-900'} px-8 py-6 text-center`}>
        {isPopular && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
            MOST POPULAR
          </div>
        )}
        <h3 className="text-2xl font-serif font-bold text-white mb-1">{title}</h3>
        <div className="text-4xl font-bold text-white mb-1 flex items-center justify-center">
          {price === 'Free' ? (
            <span className="bg-black bg-opacity-20 px-4 py-1 rounded-full">Free</span>
          ) : (
            <>
              <span className="text-2xl mr-1">₹</span>{price}
            </>
          )}
        </div>
        {subtitle && <p className="text-white text-opacity-90 text-sm">{subtitle}</p>}
      </div>
      
      {/* Decorative element */}
      <div className={`h-2 ${isPopular ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}></div>
      
      {/* Features */}
      <div className="p-6">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
              {feature.available ? (
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-700'} mr-3`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 text-gray-400 mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
              <span className={`${feature.available ? (isPopular ? 'text-gray-800 font-medium' : 'text-gray-700') : 'text-gray-400'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleChoosePlan}
          className={`w-full mt-8 py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 shadow-md cursor-pointer
            ${isPopular 
              ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:-translate-y-1' 
              : 'bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 transform hover:-translate-y-1'}`}>
          Choose This Plan
        </button>
      </div>
      
      {/* Decorative corner shapes */}
      <div className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full ${isPopular ? 'bg-orange-500' : 'bg-gray-200'} bg-opacity-20`}></div>
      <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full ${isPopular ? 'bg-red-500' : 'bg-gray-200'} bg-opacity-10`}></div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isPopular: PropTypes.bool,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })
  ).isRequired,
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Basic Plan",
      price: "Free",
      subtitle: "Getting Started",
      features: [
        { text: "Typing", available: false },
        { text: "Formatting", available: false },
        { text: "Proofreading", available: false },
        { text: "Cover Designing (Artistic)", available: true },
        { text: "ISBN Assignment", available: true },
        { text: "Copyright Registration", available: false },
        { text: "Marketing", available: false },
        { text: "Promotional Material", available: false },
        { text: "5 Author Copies", available: true },
        { text: "eBook Creation and Distribution (50% Royalty)", available: true },
        { text: "20% Royalty", available: true },
        { text: "Dedicated Project Manager", available: true },
        { text: "Indian Online Distribution", available: true },
        { text: "International Online Distribution", available: true }
      ]
    },
    {
      title: "Economy Plan",
      price: "60",
      subtitle: "Per page",
      features: [
        { text: "Typing", available: false },
        { text: "Formatting", available: true },
        { text: "Proofreading", available: false },
        { text: "Cover Designing (Artistic)", available: true },
        { text: "ISBN Assignment", available: true },
        { text: "Copyright Registration", available: true },
        { text: "Organic Marketing", available: true },
        { text: "Promotional Material", available: false },
        { text: "10 Author Copies", available: true },
        { text: "eBook Creation and Distribution (50% Royalty)", available: true },
        { text: "20% Royalty", available: true },
        { text: "Dedicated Project Manager", available: true },
        { text: "Indian Online Distribution", available: true },
        { text: "International Online Distribution", available: true }
      ]
    },
    {
      title: "Premium Plan",
      price: "200",
      subtitle: "Per Page",
      isPopular: true,
      features: [
        { text: "Typing", available: true },
        { text: "Formatting", available: true },
        { text: "Proofreading", available: true },
        { text: "Cover Designing (Premium)", available: true },
        { text: "ISBN Assignment", available: true },
        { text: "Copyright Registration", available: true },
        { text: "Organic Marketing & Paid Advertisement", available: true },
        { text: "Banners & Posters", available: true },
        { text: "20 Author Copies", available: true },
        { text: "eBook Creation and Distribution (50% Royalty)", available: true },
        { text: "20% Royalty", available: true },
        { text: "Dedicated Project Manager", available: true },
        { text: "Indian Online Distribution", available: true },
        { text: "International Online Distribution", available: true }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-100 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-200 opacity-20 blur-2xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-red-200 opacity-30 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-3 text-orange-600 bg-orange-100 px-6 py-2 rounded-full shadow-sm">
            <BookOpen size={24} />
            <span className="text-2xl font-bold">Premium Publishing Solutions</span>
          </div>
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Craft Your <span className="text-orange-600">Literary Legacy</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Professional publishing packages designed for author success and maximum impact
          </p>
        </div>

        {/* Pricing toggle would go here */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              subtitle={plan.subtitle}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        {/* Testimonial or trust indicators */}
        <div className="mt-16 bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Publish Your Book?</h3>
              <p className="text-gray-700">Our expert team is here to guide you through every step</p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          *All inclusive pricing with GST and quality assurance. Prices subject to manuscript length.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;