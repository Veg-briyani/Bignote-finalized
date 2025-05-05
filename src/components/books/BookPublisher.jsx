"use client";
import {
  BookOpen,
  PenTool,
  Globe,
  Award,
  Edit3,
  BarChart,
  ChevronRight,
  Star,
  Users,
  Check,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  BookMarked,
} from "lucide-react";
import { useState, useEffect } from "react";

// Constants for better maintainability
const STATS = [
  { icon: Globe, title: "Global Reach", value: "24 Countries" },
  { icon: Award, title: "Awards Won", value: "150+" },
  { icon: Edit3, title: "Editors", value: "50 Experts" },
  { icon: BarChart, title: "Success Rate", value: "95%" },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with BigNote was transformative. Their team turned my draft into a Wall Street Journal bestseller within months!",
    author: "Emily Rodriguez, Bestselling Author",
  },
  {
    quote:
      "The editorial process was seamless and their marketing reach is unparalleled. My book reached readers I never thought possible.",
    author: "David Chen, First-time Author",
  },
  {
    quote:
      "BigNote's team understood my vision perfectly. Their guidance made all the difference in bringing my story to life.",
    author: "Sarah Johnson, Award-winning Novelist",
  },
];

const JOURNEY_STEPS = [
  { step: "Concept", icon: "💡", line: true },
  { step: "Draft", icon: "📝", line: true },
  { step: "Edit", icon: "✒️", line: true },
  { step: "Publish", icon: "🎉", line: false },
];

const METRICS = [
  { label: "Author Satisfaction", value: "98%", percentage: "98%" },
  { label: "Repeat Authors", value: "85%", percentage: "85%" },
  { label: "Market Growth", value: "20% YoY", percentage: "20%" },
];

const NAV_ITEMS = [
  { icon: Users, label: "About Us" },
  { icon: BookOpen, label: "Books" },
  { icon: MessageCircle, label: "Contact" },
];

const BookPublisher = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isBookHovered, setIsBookHovered] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-sans">
      {/* Decorative floating elements */}
      <div className="fixed opacity-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl top-20 -left-32 animate-float" />
      <div className="fixed opacity-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl bottom-20 -right-48 animate-float-slow" />

      <main className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Content Section (Now takes full width) */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="mb-8 flex items-center gap-3 bg-orange-100 w-fit px-4 py-2 rounded-full transition-all hover:bg-orange-200 hover:shadow-md">
              <BookOpen className="text-orange-600" size={20} />
              <span className="text-orange-600 font-medium">
                BigNote Publishing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              From Manuscript to
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                  Global Bestseller
                </span>
                <svg
                  className="absolute -bottom-4 left-0 w-full"
                  viewBox="0 0 300 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12C50 4 100 4 150 4C200 4 250 12 297 12"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Empower your storytelling with our end-to-end publishing
              ecosystem.
              <br />
              Trusted by{" "}
              <span className="font-semibold text-orange-600">5,000+</span>{" "}
              authors across{" "}
              <span className="font-semibold text-orange-600">24</span>{" "}
              countries.
            </p>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {STATS.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="p-4 bg-white rounded-xl border border-orange-50 hover:border-orange-100 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                      <Icon
                        className="text-orange-600 group-hover:text-white"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{title}</p>
                      <p className="text-lg font-semibold text-orange-600">
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="mb-12 relative bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
              <div className="absolute -left-3 top-6 text-6xl text-orange-200">
                "
              </div>
              <div className="relative pl-6">
                <p className="text-gray-700 italic mb-4 min-h-[4rem]">
                  {TESTIMONIALS[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-orange-600 font-medium">
                    – {TESTIMONIALS[currentTestimonial].author}
                  </p>
                  <div className="flex gap-1">
                    {TESTIMONIALS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full ${
                          currentTestimonial === index
                            ? "bg-orange-600"
                            : "bg-orange-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-700 hover:shadow-lg transition-all group">
                <PenTool size={20} />
                Start Your Journey
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50 transition-all">
                <BookOpen size={20} />
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Animation Styles */}
      <style jsx global>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes float-slow {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BookPublisher;