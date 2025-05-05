import { useState } from "react";
import {
  Phone,
  MapPin,
  Send,
  BookOpen,
  Users,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mnndnkqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
  
      console.log("Form submission response:", response);
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon."
        });
        
        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        
        setFormStatus({
          submitted: true,
          success: false,
          message: "Sorry, there was a problem submitting your form. Please try again later."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Sorry, there was a problem submitting your form. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 font-sans">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 text-orange-600">
            <BookOpen className="w-8 h-8" />
            <span className="text-2xl font-bold font-sans">
              BigNote Publications
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Connect With Our Publishing Team
          </h1>
          <p className="text-gray-600 text-lg">
            Let&apos;s collaborate to bring your literary vision to life
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 pb-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            {formStatus.submitted && (
              <div className={`rounded-xl p-4 mb-6 ${formStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                <div className="flex items-center">
                  <svg 
                    className={`w-5 h-5 mr-2 ${formStatus.success ? 'text-green-500' : 'text-red-500'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    {formStatus.success ? (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    )}
                  </svg>
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <MessageSquare className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-semibold text-gray-900">
                  Send Your Inquiry
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent font-sans"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent font-sans"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent font-sans"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 font-sans"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Team Contacts Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-3">
                    Direct Contacts
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium font-sans text-sm">
                        Varun Jain
                      </p>
                      <a
                        href="tel:+919958138227"
                        className="text-orange-600 hover:text-orange-700 flex items-center gap-1.5 mt-1 font-sans text-sm"
                      >
                        <Phone className="w-3.5 h-3.5" /> +91 99581 38227
                      </a>
                    </div>
                    <div>
                      <p className="font-medium font-sans text-sm">
                        Rishabh Jain
                      </p>
                      <a
                        href="tel:+919999329694"
                        className="text-orange-600 hover:text-orange-700 flex items-center gap-1.5 mt-1 font-sans text-sm"
                      >
                        <Phone className="w-3.5 h-3.5" /> +91 99993 29694
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-3">
                    Our Offices
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium font-sans text-sm">
                        Uttar Pradesh Office
                      </p>
                      <p className="text-gray-600 text-xs font-sans">
                        39/2/1B, Site 4, Sahibabad Industrial Area
                      </p>
                      <p className="text-gray-600 text-xs font-sans">
                        Ghaziabad, Uttar Pradesh - 201010
                      </p>
                    </div>
                    <div>
                      <p className="font-medium font-sans text-sm">
                        Delhi Office
                      </p>
                      <p className="text-gray-600 text-xs font-sans">
                        UG1, Ajit Arcade, Gali 12, Madhu Vihar Market
                      </p>
                      <p className="text-gray-600 text-xs font-sans">
                        IP Extn., Delhi - 110092
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-lg font-serif font-semibold mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://www.facebook.com/Bookkish.India"
                    className="p-2.5 bg-gray-100 rounded-xl hover:bg-orange-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/rare.books.inc/"
                    className="p-2.5 bg-gray-100 rounded-xl hover:bg-orange-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-serif font-semibold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-600" />
              Our Location
            </h3>
          </div>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.189237382688!2d77.32676641508243!3d28.626611382419925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad791a98ed%3A0x6a5012319c0d7c40!2sSahibabad%20Industrial%20Area%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1718281490487!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;