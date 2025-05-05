import { BookOpen, Globe, BarChart, MessageCircleQuestion, Clock } from "lucide-react";

const YetNotConvinced = () => {
  const handleBookConsultation = () => {
    window.open("https://calendly.com/dydevansh/30min", "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            {/* Benefit Items */}
            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <BookOpen size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                Generous Author Earnings
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                Enjoy a substantial share from every book sold through our global network.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <BarChart size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  Transparent Reporting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Real-time sales dashboard with monthly royalty payouts and analytics.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-100 hover:bg-orange-50 transition-all duration-300">
              <div className="flex-shrink-0 p-2.5 bg-orange-100 rounded-lg text-orange-600">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  Global Distribution
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                Distribute your book internationally through both print and digital formats.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-8 rounded-2xl shadow-lg overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full mix-blend-screen blur-xl"></div>
            <div className="absolute bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-2 text-amber-100">
                <MessageCircleQuestion size={28} strokeWidth={1.5} />
                <h2 className="text-3xl font-serif font-bold text-white">
                  Personalized Guidance
                </h2>
              </div>
              
              <p className="text-orange-50 text-sm mb-6 leading-relaxed">
                Connect with our publishing experts for tailored advice or explore our comprehensive author resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleBookConsultation}
                  className="flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <BookOpen size={20} />
                  Book Free Consultation
                </button>
                <a 
                  href="https://calendly.com/dydevansh/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border-2 border-white/30 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock size={20} className="mr-2" />
                  Schedule Now
                </a>
              </div>

              <div className="mt-6 flex items-center space-x-2 text-orange-100 text-sm">
                <Clock size={16} strokeWidth={1.5} />
                <span>Mon-Fri: 9AM - 7PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YetNotConvinced;