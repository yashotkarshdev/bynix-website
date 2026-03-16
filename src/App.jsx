import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
// import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import SeoService from './pages/SeoService';
import WebAppDevService from './pages/webAppDevService';
import SMMService from './pages/SMMService';
import SaasService from './pages/SaasService';
import GraphicDesigning from './pages/GraphicDesigning';
import Services from './pages/Services';
import Blog from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import NotFound from "./pages/NotFound";  
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Careers from './pages/careers';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path='services/seo-service' element={<SeoService />} />
          <Route path='services/web-app-development-service' element={<WebAppDevService />} />
          <Route path='services/smm-service' element={<SMMService />} />
          <Route path='services/saas-service' element={<SaasService />} />
          <Route path='services/graphic-designing' element={<GraphicDesigning />} />
          <Route path="/services" element={<Services />} />

          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/career" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
