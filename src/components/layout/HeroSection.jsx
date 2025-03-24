import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    publishingBudget: "",
    manuscriptStatus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative" style={{ backgroundColor: "#FF6100" }}>
      {/* Top decorative element */}
      <div className="absolute top-0 right-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.5 10C40.5 18.5 30 33.5 16 33.5C2 33.5 -8.5 18.5 -8.5 10C-8.5 1.5 2 -5 16 -5C30 -5 40.5 1.5 40.5 10Z" fill="white" />
          <path d="M168.5 30C168.5 46.5 150 67.5 126 67.5C102 67.5 83.5 46.5 83.5 30C83.5 13.5 102 0 126 0C150 0 168.5 13.5 168.5 30Z" fill="white" />
          <path d="M98.5 165C98.5 173.5 88 188.5 74 188.5C60 188.5 49.5 173.5 49.5 165C49.5 156.5 60 150 74 150C88 150 98.5 156.5 98.5 165Z" fill="white" />
        </svg>
      </div>

      <div className="pt-24 pb-32 md:pb-40">
        {/* Wave Shape with updated design */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
            <path
              fill="white"
              d="M0,120 C240,100 480,160 720,120 C960,80 1200,140 1440,120 L1440,140 L0,140 Z"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - taking 7 columns on large screens */}
            <div className="text-white lg:col-span-7 space-y-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full shadow-md">
                <p className="text-sm font-medium text-white">Trusted by 2,000+ Indian Authors</p>
              </div>

              <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
                Your Publishing <span className="relative">
                  Journey
                  <svg className="absolute -bottom-2 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 0 150 0 200 4" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                <span className="text-white/90">Starts Here</span>
              </h1>

              <p className="text-xl text-white/80 max-w-2xl">
                Professional publishing services tailored for Indian authors. From
                manuscript to marketplace in 90 days. Get started today.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="bg-white text-[#FF6100] px-8 py-4 rounded-xl shadow-lg hover:bg-orange-50 transition-all duration-300 font-semibold text-base">
                  Begin Publishing
                </button>
                <button className="border-2 border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-medium text-base">
                  View Pricing
                </button>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-4">
                  {[
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
                    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
                  ].map((imgUrl, i) => (
                    <img
                      key={i}
                      src={imgUrl}
                      alt="Author"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm text-white/90">
                    <span className="font-bold text-base">2,000+</span> successful book launches
                  </p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                    <span className="text-xs text-white/90 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form taking 5 columns */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs font-bold py-2 px-4 rounded-lg shadow-md">
                  Limited Time Offer
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Free Publishing Consultation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receive expert guidance within 24 hours
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="text-xs font-medium text-gray-500 ml-1 mb-1 block">Your Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6100] focus:border-[#FF6100] bg-gray-50"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-medium text-gray-500 ml-1 mb-1 block">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6100] focus:border-[#FF6100] bg-gray-50"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="text-xs font-medium text-gray-500 ml-1 mb-1 block">Phone Number</label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6100] focus:border-[#FF6100] bg-gray-50"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="publishingBudget" className="text-xs font-medium text-gray-500 ml-1 mb-1 block">Your Budget</label>
                        <select
                          id="publishingBudget"
                          name="publishingBudget"
                          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6100] focus:border-[#FF6100] bg-gray-50"
                          value={formData.publishingBudget}
                          onChange={handleChange}
                        >
                          <option value="">Select Budget</option>
                          <option value="0-25000">₹0 - ₹25,000</option>
                          <option value="25000-50000">₹25,000 - ₹50,000</option>
                          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                          <option value="100000+">₹1,00,000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="manuscriptStatus" className="text-xs font-medium text-gray-500 ml-1 mb-1 block">Manuscript Status</label>
                        <select
                          id="manuscriptStatus"
                          name="manuscriptStatus"
                          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF6100] focus:border-[#FF6100] bg-gray-50"
                          value={formData.manuscriptStatus}
                          onChange={handleChange}
                        >
                          <option value="">Select Status</option>
                          <option value="completed">Ready to Publish</option>
                          <option value="in-progress">Currently Editing</option>
                          <option value="not-started">Still Writing</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FF6100] text-white py-3.5 rounded-xl hover:bg-orange-700 transition-colors font-semibold text-sm shadow-lg"
                    >
                      Get Free Consultation
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-gray-500">
                      We respect your privacy. No spam ever.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;