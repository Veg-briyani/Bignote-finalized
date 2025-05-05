import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  MapPin,
  Mail,
  Book,
  Calculator,
  DollarSign,
  Users,
  HelpCircle,
  User,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Check,
  AlertCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }
    
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mzzrzlzq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  const footerLinks = {
    'Publishing': [
      { name: 'Services', href: '/services' },
      { name: 'Book Calculator', href: '/Book_price_cal' },
      { name: 'Pricing Plans', href: '/pricing' },
      { name: 'Distribution Network', href: '/services#distribution' }
    ],
    'Resources': [
      { name: 'Author Dashboard', href: '/dashboard' },
      { name: 'Book Showcase', href: '/#books' },
      { name: 'Publishing Process', href: '/services#process' },
      { name: 'FAQ', href: '/pricing#faq' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Login', href: 'https://dashboard.bignote.in/' },
      { name: 'Register', href: 'https://dashboard.bignote.in/' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Bookkish.India', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/rare.books.inc/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/RareBooks_Inc', label: 'Twitter' },
    { icon: Youtube, href: 'https://in.pinterest.com/bookkish_in/', label: 'pinterest' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 py-16 px-4 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4511E]/5 to-transparent pointer-events-none" />

      {/* Blurred background elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#F4511E]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-800 pb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <BookOpen size={40} className="text-[#F4511E]" />
            <div>
              <h2 className="text-2xl font-bold text-white">
                BigNote<span className="text-[#F4511E]"> Publications</span>
              </h2>
              <p className="text-sm text-gray-400">Empowering storytellers since 2015</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/Book_price_cal" className="px-4 py-2 bg-[#F4511E] hover:bg-[#F4511E]/90 text-white rounded-lg flex items-center gap-2 transition-colors">
              <Calculator size={16} />
              <span>Price Calculator</span>
            </Link>
            <Link to="/contact" className="px-4 py-2 border border-gray-700 hover:border-[#F4511E] hover:text-[#F4511E] rounded-lg flex items-center gap-2 transition-colors">
              <Mail size={16} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#F4511E]/20 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#F4511E]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-lg font-bold">Our Offices</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Uttar Pradesh Office</p>
                    <p className="text-gray-400 text-xs">
                      39/2/1B, Site 4, Sahibabad Industrial Area<br />
                      Ghaziabad, Uttar Pradesh - 201010
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Delhi Office</p>
                    <p className="text-gray-400 text-xs">
                      UG1, Ajit Arcade, Gali 12, Madhu Vihar Market<br />
                      IP Extn., Delhi - 110092
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+91 9958138227"
                className="flex items-center group text-base hover:text-[#F4511E] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-[#F4511E] flex-shrink-0" />
                <span className="truncate">+91-9958138227</span>
              </a>
              <a
                href="mailto:publish@bignotepublications.com"
                className="flex items-center group text-base hover:text-[#F4511E] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-[#F4511E] flex-shrink-0" />
                <span className="truncate">
                  publish@bignotepublications.com
                </span>
              </a>
            </div>
          </div>

          {/* Dynamic Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4 lg:col-span-1">
              <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#F4511E] pl-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center hover:text-[#F4511E] transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-[#F4511E] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright and Branding */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} BigNote Publications. All rights reserved.
            </p>
          </div>
          
          {/* Socials */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#F4511E] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-[#F4511E] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F4511E] transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-[#F4511E] transition-colors">Sitemap</Link>
          </div>
        </div>
        
        {/* Newsletter Section with Formspree Integration */}
        <div className="mt-12 px-4 py-6 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-white text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">
                Get the latest publishing tips, author success stories, and industry updates.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4511E]"
                    disabled={status === 'submitting'}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="bg-[#F4511E] hover:bg-[#F4511E]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                  {status !== 'submitting' && <ExternalLink className="w-4 h-4" />}
                </button>
              </form>
              
              {/* Success message */}
              {status === 'success' && (
                <div className="mt-2 flex items-center text-green-400 text-sm">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Thank you for subscribing to our newsletter!</span>
                </div>
              )}
              
              {/* Error message */}
              {status === 'error' && (
                <div className="mt-2 flex items-center text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;