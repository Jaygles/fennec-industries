import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import VideoMain from '../../Components/Services/Video/VideoMain';
import Footer from '../../Components/Footer/Footer';

class Video extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <VideoMain />
        <Footer />
      </main>
    );
  }
}

export default Video;
