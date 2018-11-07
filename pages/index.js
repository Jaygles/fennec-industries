import * as React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Index/Hero/Hero';
import Summary from '../Components/Index/Summary/Summary';
import Technologies from '../Components/Index/Technologies/Technologies';
import Testimonials from '../Components/Index/Testimonials/Testimonials';
import Contact from '../Components/Index/Contact/Contact';
import Footer from '../Components/Footer/Footer';

class Index extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <Hero />
        <Summary />
        <Technologies />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default Index;
