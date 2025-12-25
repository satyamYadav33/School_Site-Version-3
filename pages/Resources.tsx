
import React from 'react';

const Resources: React.FC = () => {
  const downloads = [
    { name: 'Student Handbook 2024', size: '2.4 MB', type: 'PDF' },
    { name: 'Bus Route Directory', size: '1.1 MB', type: 'PDF' },
    { name: 'Fee Structure Structure', size: '0.8 MB', type: 'PDF' },
    { name: 'Academic Calendar', size: '1.5 MB', type: 'PDF' },
    { name: 'Medical Authorization Form', size: '0.5 MB', type: 'PDF' },
    { name: 'Sports Club Application', size: '0.7 MB', type: 'DOCX' },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Resources & Portals</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Everything you need for a smooth school life at your fingertips.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Portal Links */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold mb-8">Access Portals</h2>
          {[
            { title: 'Parent Portal', icon: 'fa-user-friends', color: 'bg-blue-500', desc: 'Grades, attendance & reports.' },
            { title: 'Student Portal', icon: 'fa-user-graduate', color: 'bg-sgn-navy', desc: 'Assignments & homework.' },
            { title: 'Fee Payment', icon: 'fa-credit-card', color: 'bg-green-600', desc: 'Online secure tuition payments.' },
            { title: 'Library Catalog', icon: 'fa-book-reader', color: 'bg-sgn-gold text-sgn-navy', desc: 'Search & reserve books.' },
          ].map((portal, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 group cursor-pointer hover:shadow-lg transition-all">
              <div className={`${portal.color.split(' ')[0]} ${portal.color.includes('text') ? portal.color.split(' ')[1] : 'text-white'} w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${portal.icon}`}></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">{portal.title}</h4>
                <p className="text-xs text-gray-500">{portal.desc}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fas fa-external-link-alt text-gray-400"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Downloads */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">Download Center</h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {downloads.map((file, i) => (
                <div key={i} className={`p-6 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${file.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                      {file.type}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{file.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{file.size}</p>
                    </div>
                  </div>
                  <button className="text-sgn-navy hover:text-sgn-gold transition-colors">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-500">Need a form that's not here? <button className="text-sgn-navy font-bold underline">Contact Administrative Office</button></p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sgn-navy/5 p-8 rounded-3xl border border-sgn-navy/10">
              <h4 className="font-bold text-sgn-navy mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle"></i> Digital Learning Policy
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn about our guidelines for technology use, online safety, and the school's commitment to data privacy.
              </p>
              <button className="mt-4 text-xs font-bold uppercase tracking-widest text-sgn-navy">Read Policy</button>
            </div>
            <div className="bg-sgn-gold/5 p-8 rounded-3xl border border-sgn-gold/10">
              <h4 className="font-bold text-sgn-navy mb-4 flex items-center gap-2">
                <i className="fas fa-shield-alt"></i> Campus Safety Rules
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Comprehensive safety protocols for campus movement, emergency exits, and health guidelines for all students.
              </p>
              <button className="mt-4 text-xs font-bold uppercase tracking-widest text-sgn-navy">View Manual</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
