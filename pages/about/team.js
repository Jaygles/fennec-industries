import * as React from 'react';
import Nav from '../../Components/Nav/Nav';
import TeamMain from '../../Components/About/Team/TeamMain';
import Footer from '../../Components/Footer/Footer';

class Team extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <TeamMain />
        <Footer />
      </main>
    );
  }
}

export default Team;
