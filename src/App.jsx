import React from 'react';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <HeroSection />
        <ProductGrid />
        <ContactSection />
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
