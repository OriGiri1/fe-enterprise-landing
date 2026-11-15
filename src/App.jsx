import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceModal from './components/ServiceModal';
import SavedDrawer from './components/SavedDrawer';
import FaqAccordion from './components/FaqAccordion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { servicesData } from './data/mockData';

export default function App() {
  // Hook 6A: Dark/Light Mode state with localStorage sync
  // Khởi tạo từ localStorage.getItem('nexaflow_theme') (mặc định là 'dark')
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('nexaflow_theme');
      return savedTheme ? savedTheme : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Hook 6B: Bookmarked solutions state with localStorage sync
  // Khởi tạo từ localStorage.getItem('nexaflow_bookmarks') (mặc định là [])
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const savedBookmarks = localStorage.getItem('nexaflow_bookmarks');
      return savedBookmarks ? JSON.parse(savedBookmarks) : [];
    } catch {
      return [];
    }
  });

  // UI state for modal & drawer
  const [selectedModalService, setSelectedModalService] = useState(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [contactServiceSelection, setContactServiceSelection] = useState('');

  // Hook 6A (Effect): Đồng bộ class 'dark' lên thẻ <html> (document.documentElement)
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nexaflow_theme', theme);
    } catch (err) {
      console.error('Failed to save theme to localStorage', err);
    }
  }, [theme]);

  // Hook 6B (Effect): Đồng bộ danh sách Bookmark vào localStorage khi thay đổi
  useEffect(() => {
    try {
      localStorage.setItem('nexaflow_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (err) {
      console.error('Failed to save bookmarks to localStorage', err);
    }
  }, [bookmarkedIds]);

  // Toggle Dark/Light Mode
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Toggle Bookmark for a service
  const handleToggleBookmark = (serviceId) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  // Action: Choose service from modal and scroll to contact form
  const handleChooseServiceForQuote = (serviceTitle) => {
    setContactServiceSelection(serviceTitle);
    setSelectedModalService(null);
    setIsSavedDrawerOpen(false);

    // Cuộn mượt xuống section contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors duration-200">
      
      {/* 1. Navbar: scroll listener, theme toggle, bookmark badge */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: headlines, CTA buttons, metrics */}
        <Hero />

        {/* 3. Service Catalog: filter tabs, useMemo search, bookmarking, modal trigger */}
        <ServiceCatalog
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
          onSelectService={(service) => setSelectedModalService(service)}
        />

        {/* 4. FAQ Accordion: single-open expand/collapse */}
        <FaqAccordion />

        {/* 5. Contact Form: controlled inputs, client validation, async 1.5s simulation */}
        <ContactForm 
          initialSelectedService={contactServiceSelection} 
        />
      </main>

      {/* 6. Footer: company details, status, quick links */}
      <Footer />

      {/* Dynamic Modal: Service Details */}
      <ServiceModal
        service={selectedModalService}
        onClose={() => setSelectedModalService(null)}
        onChooseService={handleChooseServiceForQuote}
        isBookmarked={selectedModalService ? bookmarkedIds.includes(selectedModalService.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Dynamic Slide Drawer: Saved Bookmarks */}
      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={handleToggleBookmark}
        onSelectService={(service) => setSelectedModalService(service)}
        onProceedToQuote={handleChooseServiceForQuote}
      />

    </div>
  );
}
