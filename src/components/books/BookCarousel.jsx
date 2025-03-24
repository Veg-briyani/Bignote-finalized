import { useRef, useEffect, useState } from 'react';

const BookCarousel = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeTab, setActiveTab] = useState('Astrology'); // Default active tab

  // Books data categorized by tabs
  const booksByCategory = {
    Astrology: [
      { id: 1, title: "Research on Incarnation", image: "/books/KAB1048.jpg" },
      { id: 2, title: "Vedic Astrology Remedies", image: "/books/KAB1897.jpg" },
      { id: 3, title: "Kundali Vidya", image: "/books/KAB3411.jpg" },
      { id: 4, title: "Blind Chart Analysis", image: "/books/KAB3418.jpg" },
      { id: 5, title: "Astrology Chakras & Remedies", image: "/books/KAB5246.jpg" },
    ],
    Numerology: [
      { id: 6, title: "Numerology Basics", image: "/books/KAB3413.jpg" },
      { id: 7, title: "Advanced Numerology", image: "/books/KAB3414.jpg" },
      { id: 8, title: "Numerology Secrets", image: "/books/KAB3415.jpg" },
    ],
    "Self Help": [
      { id: 9, title: "The Power of Now", image: "/books/KAB3419.jpg" },
      { id: 10, title: "Atomic Habits", image: "/books/KAB3420.jpg" },
      { id: 11, title: "Mind Power", image: "/books/KAB3421.jpg" },
      { id: 12, title: "Success Principles", image: "/books/KAB3422.jpg" },
    ],
    Vastu: [
      { id: 13, title: "Maha Vastu", image: "/books/KAB3412.jpg" },
      { id: 14, title: "Vastu Shastra Simplified", image: "/books/KAB3423.jpg" },
      { id: 15, title: "Modern Vastu", image: "/books/KAB3424.jpg" },
      { id: 16, title: "Vastu for Success", image: "/books/KAB3425.jpg" },
    ],
    Ayurveda: [
      { id: 17, title: "Ayurveda Basics", image: "/books/KAB3426.jpg" },
      { id: 18, title: "Healing with Ayurveda", image: "/books/KAB3427.jpg" },
      { id: 19, title: "Modern Ayurveda", image: "/books/KAB3428.jpg" },
    ],
    Other: [
      { id: 20, title: "Timing Events Without Dasha", image: "/books/KAB3416.jpeg" },
      { id: 21, title: "Spiritual Growth", image: "/books/KAB3429.jpg" },
      { id: 22, title: "Meditation Guide", image: "/books/KAB3430.jpg" },
      { id: 23, title: "Ancient Wisdom", image: "/books/KAB3431.jpg" },
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
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Books</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
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
            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {extendedBooks.map((book, index) => (
              <div key={`${book.id}-${index}`} className="flex-none w-48">
                <div className="bg-white shadow-md overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
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