import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import SEOMain from '../../Components/Services/SEO/SEOMain';
import Footer from '../../Components/Footer/Footer';

class SEO extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <SEOMain />
        <Footer />
      </main>
    );
  }
}

export default SEO;
