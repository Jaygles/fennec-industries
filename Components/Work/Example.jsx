import * as React from 'react';
import styled, { css } from 'react-emotion';

const ExampleHeading = styled('h2')`
  font-size: 4rem !important;
`;

const DescriptionParagraph = styled('p')`
  font-size: 1.1rem !important;
`;

const ExampleImg = styled('img')`
  max-height: 95vh;
`;

class Example extends React.Component {
  _renderDescription = (arr) => {
    let descArr = [];
    descArr.push('Services: ');
    for (let i = 0; i < arr.length; i += 1) {
      if (i !== arr.length - 1) {
        descArr.push(<strong key={arr[i]}>{arr[i]}</strong>);
        descArr.push(', ');
      } else {
        descArr.push(<strong key={arr[i]}>{arr[i]}</strong>);
        descArr.push('.');
      }
    }
    return descArr;
  };
  render() {
    const { name, description, img, url } = this.props;
    return (
      <div className="columns">
        <div className="column has-text-centered">
          <ExampleHeading>{name}</ExampleHeading>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <DescriptionParagraph className="has-text-centered">
                {this._renderDescription(description)}
              </DescriptionParagraph>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <a href={url} target="_blank">
                <ExampleImg src={img.src} alt={img.alt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
