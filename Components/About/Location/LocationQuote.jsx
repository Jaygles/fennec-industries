import * as React from 'react';
import styled, { css } from 'react-emotion';

const LocationFigure = styled('figure')`
  margin-bottom: 0 !important;
`;

class LocationQuote extends React.Component {
  render() {
    const { name, body, img } = this.props;
    return (
      <article className="media">
        <LocationFigure className="media-left">
          <p className="image is-128x128">
            <img src={img.src} alt={img.alt} />
          </p>
        </LocationFigure>
        <div className="media-content">
          <div className="content">
            <strong>{name}</strong>
            <br />
            {body}
          </div>
        </div>
      </article>
    );
  }
}

export default LocationQuote;
