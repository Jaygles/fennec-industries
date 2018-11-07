import * as React from 'react';
import Nav from '../Components/Nav/Nav';
import WorkMain from '../Components/Work/WorkMain';
import Footer from '../Components/Footer/Footer';

class Work extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <WorkMain />
        <Footer />
      </main>
    );
  }
}

export default Work;
