import { useRef, useEffect, useState } from 'react';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

const BookCarousel = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeTab, setActiveTab] = useState('Astrology'); // Default active tab

  // Books data categorized by tabs
  const booksByCategory = {
    Astrology: [
      { id: 1, title: "Research on Incarnation", image: "/books/KAB1048.jpg", amazon: "#", flipkart: "#" },
      { id: 2, title: "Vedic Astrology Remedies", image: "/books/KAB1897.jpg", amazon: "#", flipkart: "#" },
      { id: 3, title: "Kundali Vidya", image: "/books/KAB3411.jpg", amazon: "#", flipkart: "#" },
      { id: 4, title: "Blind Chart Analysis", image: "/books/KAB3418.jpg", amazon: "#", flipkart: "#" },
      { id: 5, title: "Astrology Chakras & Remedies", image: "/books/KAB5246.jpg", amazon: "#", flipkart: "#" },
    ],
    Numerology: [
      { id: 6, title: "Numerology Basics", image: "/books/KAB3413.jpg", amazon: "#", flipkart: "#" },
      { id: 7, title: "Advanced Numerology", image: "/books/KAB3414.jpg", amazon: "#", flipkart: "#" },
      { id: 8, title: "Numerology Secrets", image: "/books/KAB3415.jpg", amazon: "#", flipkart: "#" },
    ],
    "Self Help": [
      { id: 9, title: "The Power of Now", image: "/books/KAB3419.jpg", amazon: "#", flipkart: "#" },
      { id: 10, title: "Atomic Habits", image: "/books/KAB3420.jpg", amazon: "#", flipkart: "#" },
      { id: 11, title: "Mind Power", image: "/books/KAB3421.jpg", amazon: "#", flipkart: "#" },
      { id: 12, title: "Success Principles", image: "/books/KAB3422.jpg", amazon: "#", flipkart: "#" },
    ],
    Vastu: [
      { id: 13, title: "Maha Vastu", image: "/books/KAB3412.jpg", amazon: "#", flipkart: "#" },
      { id: 14, title: "Vastu Shastra Simplified", image: "/books/KAB3423.jpg", amazon: "#", flipkart: "#" },
      { id: 15, title: "Modern Vastu", image: "/books/KAB3424.jpg", amazon: "#", flipkart: "#" },
      { id: 16, title: "Vastu for Success", image: "/books/KAB3425.jpg", amazon: "#", flipkart: "#" },
    ],
    Ayurveda: [
      { id: 17, title: "Ayurveda Basics", image: "/books/KAB3426.jpg", amazon: "#", flipkart: "#" },
      { id: 18, title: "Healing with Ayurveda", image: "/books/KAB3427.jpg", amazon: "#", flipkart: "#" },
      { id: 19, title: "Modern Ayurveda", image: "/books/KAB3428.jpg", amazon: "#", flipkart: "#" },
    ],
    Other: [
      { id: 20, title: "Timing Events Without Dasha", image: "/books/KAB3416.jpeg", amazon: "#", flipkart: "#" },
      { id: 21, title: "Spiritual Growth", image: "/books/KAB3429.jpg", amazon: "#", flipkart: "#" },
      { id: 22, title: "Meditation Guide", image: "/books/KAB3430.jpg", amazon: "#", flipkart: "#" },
      { id: 23, title: "Ancient Wisdom", image: "/books/KAB3431.jpg", amazon: "#", flipkart: "#" },
    ],
  };

  // Get books for the active tab
  const books = booksByCategory[activeTab];
  // Duplicate books for infinite scroll effect
  const extendedBooks = [...books, ...books, ...books];

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If near the end, scroll back to the first set of books
        if (scrollLeft + clientWidth >= scrollWidth - clientWidth) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'auto',
          });
        } else {
          // Normal scroll
          scrollRef.current.scrollTo({
            left: scrollLeft + 280,
            behavior: 'smooth',
          });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, activeTab]); // Add activeTab to dependency array

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Books</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {Object.keys(booksByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Books Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {extendedBooks.map((book, index) => (
              <div key={`${book.id}-${index}`} className="flex-none w-48">
                <div className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[3/4]">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain"
                      title={book.title}
                    />
                  </div>
                  
                  {/* Marketplace Links Overlay (appears on hover) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <h3 className="text-white text-center px-2 font-medium text-sm mb-2">{book.title}</h3>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={book.amazon} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FF9900] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-transform hover:scale-105"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Buy on Amazon
                      </a>
                      <a 
                        href={book.flipkart} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#2874F0] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-transform hover:scale-105"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Buy on Flipkart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;