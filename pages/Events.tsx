
import React, { useState } from 'react';

const Events: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    { id: 1, type: 'Academic', url: 'https://picsum.photos/id/1/800/600', title: 'Robotics Workshop' },
    { id: 2, type: 'Sports', url: 'https://picsum.photos/id/73/800/600', title: 'Swimming Competition' },
    { id: 3, type: 'Cultural', url: 'https://picsum.photos/id/158/800/600', title: 'Annual Fest 2023' },
    { id: 4, type: 'Academic', url: 'https://picsum.photos/id/61/800/600', title: 'Chemistry Lab Session' },
    { id: 5, type: 'Cultural', url: 'https://picsum.photos/id/20/800/600', title: 'Painting Expo' },
    { id: 6, type: 'Sports', url: 'https://picsum.photos/id/42/800/600', title: 'Basketball Finals' },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.type === filter);

  const upcomingEvents = [
    { date: 'Nov 12', month: '2023', title: 'Science Exhibition', time: '10:00 AM - 4:00 PM' },
    { date: 'Nov 20', month: '2023', title: 'Inter-School Debate', time: '9:30 AM - 1:00 PM' },
    { date: 'Dec 05', month: '2023', title: 'Winter Carnival', time: '11:00 AM onwards' },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-sgn-navy text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Events & Gallery</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Relive our proud moments and stay tuned for what's coming next.</p>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-1 bg-sgn-gold rounded"></div>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Upcoming Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="flex bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-sgn-navy text-white w-24 flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold">{event.date.split(' ')[1]}</span>
                <span className="text-xs uppercase font-bold tracking-widest text-sgn-gold">{event.date.split(' ')[0]}</span>
                <span className="text-[10px] mt-1 opacity-60">{event.month}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-4"><i className="far fa-clock mr-2 text-sgn-navy"></i> {event.time}</p>
                <button className="text-sgn-navy font-bold text-xs uppercase tracking-widest hover:text-sgn-gold transition-colors">Add to Calendar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-sgn-navy font-bold tracking-widest uppercase text-sm">Capturing Memories</span>
            <h2 className="text-4xl font-bold mt-2">School Gallery</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Academic', 'Sports', 'Cultural'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat ? 'bg-sgn-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer">
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-sgn-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-sgn-gold text-xs font-bold uppercase tracking-widest mb-1">{item.type}</span>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
