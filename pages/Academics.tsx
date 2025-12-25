
import React from 'react';

const Academics: React.FC = () => {
  const levels = [
    { 
      title: 'Primary School', 
      grades: 'Grade 1-5', 
      focus: 'Foundational Literacy & Numeracy', 
      icon: 'fa-child', 
      desc: 'Our primary program focuses on developing core competencies through play-way methods and inquiry-based learning.',
      subjects: ['Mathematics', 'English Language', 'Environmental Studies', 'Visual Arts', 'Coding Basics']
    },
    { 
      title: 'Secondary School', 
      grades: 'Grade 6-10', 
      focus: 'Critical Thinking & Integration', 
      icon: 'fa-user-graduate', 
      desc: 'Bridging the gap between foundational knowledge and advanced concepts through project-based learning and interdisciplinary studies.',
      subjects: ['Advanced Sciences', 'Algebra & Geometry', 'Social Studies', 'ICT & Design', 'Second Language']
    },
    { 
      title: 'Senior Secondary', 
      grades: 'Grade 11-12', 
      focus: 'Specialization & Career Readiness', 
      icon: 'fa-award', 
      desc: 'Preparing students for higher education and professional careers with specialized streams and intensive guidance.',
      subjects: ['Physics/Chemistry/Bio', 'Economics & Commerce', 'Humanities & Fine Arts', 'Computer Science', 'Career Counseling']
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Academic Programs</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">A balanced curriculum designed for the 21st-century learner.</p>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Our Pedagogy</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">The SGN Curriculum Framework</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We follow an international standard curriculum that integrates the best practices from global educational systems. Our focus remains on the "4 Cs" - Communication, Collaboration, Critical Thinking, and Creativity.
            </p>
            <div className="space-y-4">
              {[
                { t: 'Holistic Development', d: 'Emotional, social, and physical growth integrated with academics.' },
                { t: 'Experiential Learning', d: 'Hands-on projects and laboratory-based inquiry for real-world understanding.' },
                { t: 'Digital Integration', d: 'Technology as a tool for research, creation, and problem-solving.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sgn-gold rounded-full flex items-center justify-center text-sgn-navy">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.t}</h4>
                    <p className="text-sm text-gray-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/id/119/600/500" className="rounded-3xl shadow-2xl relative z-10" alt="Students in Library" />
            <div className="absolute top-10 -left-10 w-40 h-40 bg-sgn-gold rounded-full z-0 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        {levels.map((level, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group`}>
            <div className="lg:w-1/3 bg-sgn-navy p-12 text-white flex flex-col justify-center items-center text-center">
              <i className={`fas ${level.icon} text-5xl mb-6 text-sgn-gold`}></i>
              <h3 className="text-3xl font-bold mb-2">{level.title}</h3>
              <p className="text-sgn-gold font-bold tracking-widest uppercase text-sm">{level.grades}</p>
            </div>
            <div className="lg:w-2/3 p-12 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-sgn-navy uppercase tracking-widest mb-2">Focus Area</h4>
                <p className="text-2xl font-bold text-gray-800">{level.focus}</p>
              </div>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-6">{level.desc}</p>
              <div>
                <h4 className="text-xs font-bold text-sgn-navy uppercase tracking-widest mb-4">Core Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {level.subjects.map(s => (
                    <span key={s} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-medium border border-gray-200">{s}</span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                 <button className="text-sgn-navy font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                   Download Full Syllabus PDF <i className="fas fa-file-download"></i>
                 </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Timetable Integration Placeholder */}
      <section className="max-w-7xl mx-auto px-4 mt-32 text-center bg-gray-100 py-16 rounded-3xl border-2 border-dashed border-gray-300">
        <i className="fas fa-calendar-check text-4xl text-gray-400 mb-4"></i>
        <h3 className="text-2xl font-bold mb-4">Student Academic Calendar</h3>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">Access live class timetables, exam schedules, and holiday lists for the current term.</p>
        <button className="bg-sgn-navy text-white px-8 py-3 rounded-full font-bold hover:bg-sgn-gold hover:text-sgn-navy transition-all shadow-md">Access Portal</button>
      </section>
    </div>
  );
};

export default Academics;
