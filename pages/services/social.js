import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import SocialMain from '../../Components/Services/Social/SocialMain';
import Footer from '../../Components/Footer/Footer';

class Social extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <SocialMain />
        <Footer />
      </main>
    );
  }
}

export default Social;
