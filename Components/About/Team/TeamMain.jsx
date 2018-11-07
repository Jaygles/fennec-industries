import * as React from 'react';
import styled from 'react-emotion';
import TeamMember from './TeamMember';

const TeamSection = styled('section')`
  min-height: calc(100vh - 168px);
`;

const TeamContainer = styled('div')``;

const TeamColumns = styled('div')`
  justify-content: space-around;
  padding: 0 50px;
  align-items: center;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;

const teamArr = [
  {
    name: 'Peter Soto',
    img: {
      src: '/static/img/peter.jpg',
      alt: 'Peter Soto, founder',
    },
    interests: ['Kicking ass', 'Chewing bubblegum', 'being all out of gum'],
    caption: 'Co-founder, SEO and marketing specialist',
    quote: 'I would like people to be able to drink the red skeleton liquid',
  },
  {
    name: 'Bryan Marvin',
    img: {
      src: '/static/img/bryan.jpg',
      alt: 'Bryan Marvin, founder',
    },
    interests: ['Kicking ass', 'Chewing bubblegum', 'being all out of gum'],
    caption: 'Co-founder, SEO and marketing specialist',
    quote: 'I would like people to be able to drink the red skeleton liquid',
  },
  {
    name: 'Jay Sullivan',
    img: {
      src: '/static/img/jay.jpg',
      alt: 'Jay Sullivan, Lead Developer',
    },
    interests: ['Kicking ass', 'Chewing bubblegum', 'being all out of gum'],
    caption: 'Lead Developer',
    quote: 'I would like people to be able to drink the red skeleton liquid',
  },
];

class TeamMain extends React.Component {
  _renderTeamMembers = (arr) => {
    const componentArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      componentArr.push(
        <TeamMember
          name={arr[i].name}
          img={arr[i].img}
          caption={arr[i].caption}
          key={arr[i].name}
          interests={arr[i].interests}
          quote={arr[i].quote}
        />,
      );
    }
    return componentArr;
  };
  render() {
    return (
      <TeamSection className="section">
        <TeamContainer className="container content">
          <TeamColumns className="columns">
            {this._renderTeamMembers(teamArr)}
          </TeamColumns>
        </TeamContainer>
      </TeamSection>
    );
  }
}

export default TeamMain;
