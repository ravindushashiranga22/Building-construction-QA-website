import React from 'react';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Working from './sections/Working';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
     <Header/>
     <Hero />
     <About />
     <Services />
     <Portfolio />
     <Working />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
