import { useEffect } from 'react';
import { BookOpen, PenTool, Layers, Globe, Award, Users } from 'lucide-react';

const ServicesPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This matches your navbar color
  const primaryColor = "#FF6100";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Improved */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <BookOpen size={20} />
                <span className="font-medium">BigNote Publishing</span>
              </div>
              
              <div>
                <h1 className="mb-6">
                <span className="block text-4xl md:text-5xl text-gray-900 mb-1 leading-tight font-bold" style={{ 
  fontFamily: "'Space Mono', monospace", 
  letterSpacing: '0.01em' 
}}>
  TURN YOUR MANUSCRIPT
</span>

                  <span className="block text-5xl md:text-6xl text-white leading-tight font-serif italic font-bold" style={{ 
                    textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
                  }}>
                    Into a Masterpiece
                  </span>
                </h1>
                
                <p className="text-lg text-white leading-relaxed max-w-xl pl-2 border-l-4 border-white/30 italic">
                  Professional end-to-end publishing solutions tailored for authors at every stage. 
                  From manuscript to market, we handle every detail with precision.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#services" className="bg-white text-[#FF6100] hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-md">
                  Explore Services
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Get a Quote
                </a>
              </div>
              
              {/* Added stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-white/80">Authors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Improved */}
            <div className="relative hidden lg:block">
              {/* Enhanced right panel with more visual interest */}
              <div className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full" style={{ backgroundColor: primaryColor, opacity: 0.1 }}></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full" style={{ backgroundColor: primaryColor, opacity: 0.05 }}></div>
                
                {/* Header with accent */}
                <div className="border-l-4 pl-4 mb-6" style={{ borderColor: primaryColor }}>
                  <h3 className="text-xl font-serif font-bold text-gray-900">Publishing Services</h3>
                  <p className="text-sm text-gray-600">Comprehensive solutions for authors</p>
                </div>
                
                {/* Service list with enhanced styling */}
                <div className="space-y-5 relative z-10">
                  {[
                    { icon: PenTool, title: "Book Editing", desc: "Professional editing and proofreading" },
                    { icon: Layers, title: "Cover Design", desc: "Eye-catching custom book covers" },
                    { icon: Globe, title: "Distribution", desc: "Global reach for your publications" },
                    { icon: Award, title: "Marketing", desc: "Strategic promotion campaigns" }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg border border-gray-100 hover:border-orange-200 transition-all">
                      <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: primaryColor }}>
                        <service.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stats with enhanced design */}
                <div className="mt-8 pt-6 border-t border-gray-200 relative z-10">
                  <div className="flex items-center">
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3 w-full">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                        <div className="text-sm text-gray-600">Author satisfaction</div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional info badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full text-white" style={{ backgroundColor: primaryColor }}>
                      <Award size={12} /> Trusted by 15,000+ authors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF6100] px-4 py-2 rounded-full mb-4">
              <Layers size={20} />
              <span className="font-medium">Our Publishing Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Comprehensive Publishing Solutions
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              From manuscript preparation to global distribution, we offer a complete range of services 
              to help authors succeed in today's competitive publishing landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Editing & Proofreading",
                description: "Professional editing services including developmental editing, copy editing, and proofreading to polish your manuscript to perfection."
              },
              {
                icon: Layers,
                title: "Cover Design & Formatting",
                description: "Eye-catching book cover designs and professional interior formatting that meet industry standards for both print and digital formats."
              },
              {
                icon: BookOpen,
                title: "ISBN & Copyright",
                description: "Complete registration services for ISBN assignment and copyright protection to legally safeguard your intellectual property."
              },
              {
                icon: Globe,
                title: "Global Distribution",
                description: "Worldwide distribution through major online retailers, bookstores, and libraries, making your book available to readers across the globe."
              },
              {
                icon: Award,
                title: "Marketing & Promotion",
                description: "Strategic book marketing services including social media campaigns, press releases, and promotional materials to maximize your book's visibility."
              },
              {
                icon: Users,
                title: "Author Platform Building",
                description: "Guidance and resources to build your author brand, connect with readers, and establish a strong presence in the publishing community."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md text-white" style={{ backgroundColor: primaryColor }}>
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <a 
                  href="/contact" 
                  className="inline-flex items-center font-medium"
                  style={{ color: primaryColor }}
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF6100] px-4 py-2 rounded-full mb-4">
              <PenTool size={20} />
              <span className="font-medium">How We Work</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Publishing Process
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined journey from manuscript to published book, designed to make the publishing process 
              as smooth and efficient as possible.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  title: "Consultation & Planning",
                  description: "We begin with a detailed discussion of your manuscript, publishing goals, and target audience to create a customized publishing plan.",
                  icon: Users
                },
                {
                  title: "Editing & Design",
                  description: "Your manuscript undergoes professional editing while our designers create your book cover and interior layout.",
                  icon: PenTool
                },
                {
                  title: "Production & Publication",
                  description: "We handle all technical aspects of production, including ISBN assignment, formatting, and uploading to publishing platforms.",
                  icon: Layers
                },
                {
                  title: "Distribution & Marketing",
                  description: "Your book is distributed globally, accompanied by marketing strategies to reach your target readers effectively.",
                  icon: Globe
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse text-right' : ''}`}>
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-orange-200 z-10 items-center justify-center">
                    <span style={{ color: primaryColor }} className="font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content Boxes */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                      {/* Timeline Node (Mobile) */}
                      <div className="lg:hidden absolute -top-6 left-6 w-12 h-12 text-white rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: primaryColor }}>
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <step.icon size={20} style={{ color: primaryColor }} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-20 text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: primaryColor }}
            >
              <BookOpen size={20} className="mr-2" />
              Start Your Publishing Journey
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF6100] px-4 py-2 rounded-full mb-4">
              <Award size={20} />
              <span className="font-medium">Author Success Stories</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Our Authors Say
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from authors who have successfully published with BigNote Publications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with BigNote was a game-changer for my writing career. Their professional team turned my manuscript into a bestseller in just months!",
                author: "Sarah Johnson",
                role: "Fiction Author",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
              {
                quote: "The attention to detail and personalized guidance made all the difference. My book exceeded all my sales expectations within the first quarter.",
                author: "Michael Chen",
                role: "Business Author",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              },
              {
                quote: "As a first-time author, I was nervous about the publishing process. BigNote made it seamless and enjoyable from start to finish.",
                author: "Priya Sharma",
                role: "Memoir Writer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl text-black md:text-4xl font-serif font-bold mb-6">
            Ready to Bring Your Book to Life?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get started today with a free consultation to discuss your manuscript and publishing goals.
            Our team of experts is ready to help you navigate the publishing journey.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-[#FF6100] hover:bg-orange-50 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/pricing" 
              className="bg-transparent border-2 border-white/70 hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;