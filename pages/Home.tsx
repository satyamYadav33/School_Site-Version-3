
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/42/1920/1080" 
            alt="School Campus" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-top-10 duration-700">Empowering the Leaders of Tomorrow</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light tracking-wide">
            Experience world-class education with a focus on holistic development, ethical integrity, and global citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-sgn-gold text-sgn-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Admissions Open 2024-25
            </Link>
            <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Explore Our Values
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-20">
        {[
          { title: 'Academic Programs', icon: 'fa-book-open', link: '/academics', color: 'bg-sgn-navy' },
          { title: 'School Calendar', icon: 'fa-calendar-alt', link: '/events', color: 'bg-sgn-gold' },
          { title: 'Faculty & Staff', icon: 'fa-users', link: '/about', color: 'bg-sgn-navy' },
          { title: 'Campus Virtual Tour', icon: 'fa-vr-cardboard', link: '/events', color: 'bg-sgn-gold text-sgn-navy' },
        ].map((item, i) => (
          <Link 
            key={i} 
            to={item.link}
            className={`${item.color} ${item.color.includes('gold') ? 'text-sgn-navy' : 'text-white'} p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform`}
          >
            <i className={`fas ${item.icon} text-3xl mb-4 opacity-80`}></i>
            <h3 className="font-bold text-lg uppercase tracking-wider">{item.title}</h3>
          </Link>
        ))}
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-sgn-gold font-bold tracking-widest uppercase text-sm">Welcome to SGN</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Nurturing Excellence, Inspiring Innovation</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            SGN International School is more than just an educational institution. It is a vibrant community where students are encouraged to explore their passions, challenge their limits, and develop a deep sense of responsibility toward society. 
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-4xl font-bold text-sgn-navy">15:1</div>
              <p className="text-sm text-gray-500 uppercase font-medium">Student-Teacher Ratio</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sgn-navy">100%</div>
              <p className="text-sm text-gray-500 uppercase font-medium">Digital Classrooms</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sgn-navy">25+</div>
              <p className="text-sm text-gray-500 uppercase font-medium">Extracurricular Clubs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-sgn-navy">10k+</div>
              <p className="text-sm text-gray-500 uppercase font-medium">Books in Library</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/id/20/400/500" className="rounded-2xl shadow-lg mt-8" alt="Students" />
          <img src="https://picsum.photos/id/119/400/500" className="rounded-2xl shadow-lg" alt="Science Lab" />
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Stay Updated</span>
              <h2 className="text-4xl font-bold mt-2">Latest News & Events</h2>
            </div>
            <Link to="/events" className="text-sgn-navy font-bold border-b-2 border-sgn-gold pb-1 hover:text-sgn-gold transition-colors">View All Events</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                date: 'Oct 15, 2023', 
                title: 'Annual Sports Day 2023: A Spectacular Display of Talent', 
                excerpt: 'Our students showcased immense physical prowess and team spirit during this year\'s gala event.',
                image: 'https://picsum.photos/id/73/600/400'
              },
              { 
                date: 'Oct 02, 2023', 
                title: 'SGN Wins Regional Science Fair Championship', 
                excerpt: 'The senior research team secured the first position with their innovative plastic recycling project.',
                image: 'https://picsum.photos/id/61/600/400'
              },
              { 
                date: 'Sept 25, 2023', 
                title: 'Parent-Teacher Interactive Workshop on Digital Well-being', 
                excerpt: 'A collaborative session discussing healthy tech habits for children in the modern era.',
                image: 'https://picsum.photos/id/158/600/400'
              },
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-sgn-gold text-sgn-navy text-xs font-bold px-3 py-1 rounded-full">{news.date}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 line-clamp-2 leading-snug group-hover:text-sgn-navy transition-colors">{news.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                  <button className="text-sgn-navy font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-sgn-navy rounded-3xl p-12 text-center text-white space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sgn-gold rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <h2 className="text-4xl font-bold relative z-10">Start Your Journey with SGN Today</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
            Admissions for the 2024-2025 academic year are filling fast. Book a campus tour or inquire online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <Link to="/admissions" className="bg-white text-sgn-navy px-8 py-3 rounded-full font-bold hover:bg-sgn-gold transition-colors">Apply Online</Link>
            <Link to="/contact" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-sgn-navy transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
