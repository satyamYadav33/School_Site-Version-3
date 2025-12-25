
import React, { useState } from 'react';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    grade: 'Primary',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const steps = [
    { title: 'Online Inquiry', desc: 'Fill out the initial interest form on our website or visit the campus office.', icon: 'fa-file-signature' },
    { title: 'Campus Visit', desc: 'Schedule a tour to see our facilities and interact with our academic coordinators.', icon: 'fa-school' },
    { title: 'Admission Test', desc: 'A friendly assessment to understand your child\'s learning level and potential.', icon: 'fa-vial' },
    { title: 'Documentation', desc: 'Submit required academic records, identification, and complete the final enrollment.', icon: 'fa-folder-open' },
  ];

  const faqs = [
    { q: 'What is the age criteria for Kindergarten?', a: 'Children should be at least 3 years and 6 months old as of June 1st of the academic year.' },
    { q: 'Does the school provide transportation?', a: 'Yes, we have a fleet of AC buses equipped with GPS tracking that covers major routes in the city.' },
    { q: 'What is the teacher-to-student ratio?', a: 'We maintain a strict ratio of 15:1 to ensure personalized attention for every child.' },
    { q: 'Is there a sibling discount available?', a: 'Yes, we offer a 10% waiver on tuition fees for the second sibling enrolled in the school.' },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Admissions</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Join our community of lifelong learners. We follow a transparent and child-friendly admission process.</p>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-sgn-gold group hover:bg-sgn-navy hover:text-white transition-all">
              <div className="w-16 h-16 bg-gray-100 text-sgn-navy rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-sgn-gold transition-colors">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form Section */}
        <section>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-sgn-navy p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Inquiry Form</h2>
              <p className="text-blue-200 text-sm">Please provide your details, and our admissions team will contact you within 24 hours.</p>
            </div>
            
            {submitted ? (
              <div className="p-12 text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl mb-6">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Inquiry Received!</h3>
                <p className="text-gray-500">Thank you for your interest. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Parent Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Student Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Applying for Grade</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  >
                    <option>Kindergarten</option>
                    <option>Primary (1-5)</option>
                    <option>Secondary (6-10)</option>
                    <option>Senior Secondary (11-12)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message/Inquiry</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-1 focus:ring-sgn-navy outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-sgn-gold text-sgn-navy font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2">
                  Submit Inquiry <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="space-y-10">
          <div>
            <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Have Questions?</span>
            <h2 className="text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 group">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-3 text-gray-800">
                  <span className="w-6 h-6 bg-sgn-gold/20 text-sgn-navy rounded-full flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl text-sgn-navy flex-shrink-0">
              <i className="fas fa-headset"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg">Still need help?</h4>
              <p className="text-sm text-gray-500">Contact our admission helpdesk at <br/> <span className="text-sgn-navy font-bold">+1 (555) 000-1111</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
