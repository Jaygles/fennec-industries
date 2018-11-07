import * as React from 'react';
import styled from 'react-emotion';

const VideoSection = styled('section')`
  min-height: calc(100vh - 192px);
`;

class VideoMain extends React.Component {
  render() {
    return (
      <VideoSection className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Video Marketing</h1>
            </div>
          </div>
        </div>
      </VideoSection>
    );
  }
}

export default VideoMain;
