import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import LocationMain from '../../Components/About/Location/LocationMain';
import Footer from '../../Components/Footer/Footer';

class Location extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <LocationMain />
        <Footer />
      </main>
    );
  }
}

export default Location;
