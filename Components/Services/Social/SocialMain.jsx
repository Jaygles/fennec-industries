import * as React from 'react';
import styled from 'react-emotion';

const SocialSection = styled('section')`
  min-height: calc(100vh - 192px);
`;

class SocialMain extends React.Component {
  render() {
    return (
      <SocialSection className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Social Media Marketing</h1>
            </div>
          </div>
        </div>
      </SocialSection>
    );
  }
}

export default SocialMain;
