
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import SchoolAssistant from './components/SchoolAssistant';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Events = React.lazy(() => import('./pages/Events'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Contact = React.lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <React.Suspense fallback={
          <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-sgn-gold border-t-sgn-navy rounded-full animate-spin"></div>
              <p className="mt-4 font-serif text-sgn-navy font-bold tracking-widest">SGN International</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </React.Suspense>
        <SchoolAssistant />
      </Layout>
    </Router>
  );
};

export default App;
