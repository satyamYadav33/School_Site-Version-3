
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">We're here to answer any questions you may have about our school.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info Card */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg space-y-8">
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-4">Our Information</h2>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-sgn-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marked-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Main Campus</h4>
                <p className="text-gray-500 text-sm leading-relaxed">123 Knowledge Park, Education Row, <br/>Metro City, 560001</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-50 text-sgn-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Admissions Phone</h4>
                <p className="text-gray-500 text-sm leading-relaxed">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm leading-relaxed">+1 (555) 123-4568</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-sgn-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope-open text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Email Support</h4>
                <p className="text-gray-500 text-sm leading-relaxed">info@sgninternational.edu</p>
                <p className="text-gray-500 text-sm leading-relaxed">admissions@sgninternational.edu</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 text-gray-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Working Hours</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Mon - Fri: 8:00 AM - 4:00 PM</p>
                <p className="text-gray-500 text-sm leading-relaxed">Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-sgn-gold/10 p-8 rounded-3xl border border-sgn-gold/20">
            <h4 className="font-bold text-sgn-navy mb-4">Follow Our Updates</h4>
            <div className="flex gap-4">
              {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sgn-navy hover:bg-sgn-navy hover:text-white transition-all shadow-sm">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 h-full">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                <p className="text-gray-500">One of our team members will review your message and reach out soon.</p>
                <button onClick={() => setSubmitted(false)} className="text-sgn-navy font-bold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Your Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                  <input required type="text" placeholder="General Inquiry" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                  <textarea required rows={6} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none"></textarea>
                </div>
                <button type="submit" className="bg-sgn-navy text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all flex items-center gap-3">
                  Send Message <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="h-96 w-full bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
           <img src="https://picsum.photos/id/122/1200/400" className="w-full h-full object-cover filter grayscale" alt="Map Placeholder" />
           <div className="absolute inset-0 bg-sgn-navy/40 flex items-center justify-center">
             <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm text-center">
               <div className="w-12 h-12 bg-sgn-navy text-white rounded-full flex items-center justify-center mb-4">
                 <i className="fas fa-map-marker-alt"></i>
               </div>
               <h4 className="font-bold text-lg mb-1">Find Us on Google Maps</h4>
               <p className="text-xs text-gray-500 mb-6">Explore the neighborhood and find the best route to our school.</p>
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-sgn-gold text-sgn-navy px-6 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform">Get Directions</a>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
