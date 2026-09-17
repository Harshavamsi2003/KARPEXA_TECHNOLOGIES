import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Seo from './seo/Seo';

import Home from './pages/Home';
import AllCapabilities from './pages/AllCapabilities';
import Sectors from './pages/Sectors';
import OurWork from './pages/OurWork';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/fonts.css';
import './styles/global.css';
import './styles/sections.css';
import './styles/motion.css';
import './styles/ourwork.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Seo />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<AllCapabilities />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
