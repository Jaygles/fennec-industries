import * as React from 'react';
import styled, { css } from 'react-emotion';

const teamImg = css`
  max-width: 260px;
  border-radius: 2%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.12);
`;

const TeamColumn = styled('div')`
  min-width: 300px;
  max-width: 325px;
  margin-top: 30px;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfdfd;
  @media screen and (max-width: 769px) {
    flex: none;
  }
`;

const TeamDivider = styled('span')`
  height: 2px;
  margin: 25px 0;
  min-width: 80%;
  background-color: #813a4a;
`;

const TeamName = styled('h2')`
  // font-family: 'Megrim', cursive;
  // font-family: 'Source Sans Pro', sans-serif;
  // font-family: 'Source Code Pro', monospace;
  // font-family: 'Fanwood Text', serif;
  // font-family: 'Oxygen', sans-serif;
  // font-family: 'Cabin', sans-serif;
  // font-family: 'Rajdhani', sans-serif;
  // font-family: 'Heebo', sans-serif;
  // font-family: 'Quattrocento Sans', sans-serif;
  // font-family: 'Volkhov', serif;
  // font-family: 'Quattrocento', serif;
  // font-family: 'Ruda', sans-serif;
  // font-family: 'Gentium Basic', serif;
`;

const TeamCaption = styled('h3')`
  margin-top: 0 !important;
  // font-family: 'Megrim', cursive;
  // font-family: 'Source Sans Pro', sans-serif;
  // font-family: 'Source Code Pro', monospace;
  // font-family: 'Fanwood Text', serif;
  // font-family: 'Oxygen', sans-serif;
  // font-family: 'Cabin', sans-serif;
  // font-family: 'Rajdhani', sans-serif;
  // font-family: 'Heebo', sans-serif;
  // font-family: 'Quattrocento Sans', sans-serif;
  // font-family: 'Volkhov', serif;
  // font-family: 'Quattrocento', serif;
  // font-family: 'Ruda', sans-serif;
  // font-family: 'Gentium Basic', serif;
`;

const NameCaptionWrap = styled('div')`
  min-height: 130px;
`;

const Quote = styled('p')`
  width: 90%;
  margin: 0 auto;
`;

class TeamMember extends React.Component {
  _renderInterests = (arr) => {
    const interests = [];
    for (let i = 0; i < arr.length; i += 1) {
      interests.push(<p key={arr[i]}>{arr[i]}</p>);
    }
    return interests;
  };
  render() {
    const { name, img, caption, interests, quote } = this.props;
    return (
      <TeamColumn className="column is-4 card">
        <img className={teamImg} src={img.src} alt={img.alt} />
        <TeamDivider />
        <NameCaptionWrap>
          <strong>
            <TeamName className="has-text-centered">{name}</TeamName>
          </strong>
          <TeamCaption className="has-text-centered">{caption}</TeamCaption>
        </NameCaptionWrap>
        <Quote className="has-text-justified">"{quote}"</Quote>
      </TeamColumn>
    );
  }
}

export default TeamMember;
