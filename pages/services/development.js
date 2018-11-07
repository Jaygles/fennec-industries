import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import DevelopmentMain from '../../Components/Services/Development/DevelopmentMain';
import Footer from '../../Components/Footer/Footer';

class Development extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <DevelopmentMain />
        <Footer />
      </main>
    );
  }
}

export default Development;
