
import React from 'react';

const About: React.FC = () => {
  const faculty = [
    { name: 'Dr. Anita Sharma', role: 'Principal', dept: 'Administration', image: 'https://picsum.photos/id/64/300/300', bio: 'With over 25 years in education, Dr. Sharma leads with vision.' },
    { name: 'Mr. Robert Wilson', role: 'Head of Science', dept: 'Secondary', image: 'https://picsum.photos/id/65/300/300', bio: 'Passionate about astrophysics and STEM education innovations.' },
    { name: 'Ms. Priya Kapoor', role: 'Language Coordinator', dept: 'Arts & Humanities', image: 'https://picsum.photos/id/1027/300/300', bio: 'Expert in multilingual pedagogy and literary appreciation.' },
    { name: 'Mr. John David', role: 'Sports Director', dept: 'Physical Education', image: 'https://picsum.photos/id/342/300/300', bio: 'Former state athlete dedicated to youth physical health.' },
  ];

  return (
    <div className="pb-20 space-y-24">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-48 h-48 bg-sgn-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4 relative z-10">Our Legacy & Values</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 relative z-10">Established in 1998, SGN International has been at the forefront of quality education for over two decades.</p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-12 rounded-3xl shadow-xl border-l-8 border-sgn-gold">
          <i className="fas fa-eye text-4xl text-sgn-navy mb-6"></i>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a globally recognized educational institution that nurtures curious minds, fosters ethical leadership, and creates compassionate global citizens who contribute meaningfully to the world.
          </p>
        </div>
        <div className="bg-white p-12 rounded-3xl shadow-xl border-l-8 border-sgn-navy">
          <i className="fas fa-bullseye text-4xl text-sgn-gold mb-6"></i>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide a balanced learning environment where academic rigor meets creative exploration, ensuring every child reaches their full potential through personalized attention and state-of-the-art facilities.
          </p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://picsum.photos/id/64/600/700" alt="Principal" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sgn-gold rounded-3xl z-0"></div>
          </div>
          <div className="space-y-6">
            <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Leadership Message</span>
            <h2 className="text-4xl font-bold">From the Principal's Desk</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg italic">
              <p>"At SGN International School, we believe that education is not just about memorizing facts but about training the mind to think."</p>
              <p>"We are committed to providing an atmosphere that is conducive to learning and growing. Our focus is on the multi-faceted development of each student, allowing them to excel in academics, sports, and the arts alike."</p>
              <p>"I invite you to be a part of our journey as we continue to build a legacy of excellence."</p>
            </div>
            <div className="pt-6">
              <h4 className="font-bold text-xl text-sgn-navy">Dr. Anita Sharma</h4>
              <p className="text-gray-500 font-medium">Ph.D. in Education, Oxford University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Our Mentors</span>
          <h2 className="text-4xl font-bold mt-2">Meet Our Expert Faculty</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center p-6 group">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform" />
                <div className="absolute -bottom-2 right-2 bg-sgn-gold text-sgn-navy w-8 h-8 rounded-full flex items-center justify-center text-xs shadow-md border-2 border-white">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-sgn-navy font-bold text-sm mb-4 uppercase tracking-tighter">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
              <div className="flex justify-center space-x-3 mt-6 text-gray-400">
                <a href="#" className="hover:text-sgn-navy transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-sgn-navy transition-colors"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
