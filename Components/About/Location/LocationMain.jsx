import * as React from 'react';
import styled from 'react-emotion';
import LocationQuote from './LocationQuote';

const LocationSection = styled('section')`
  min-height: calc(100vh - 168px);
`;

const Figure = styled('figure')`
  padding: 60px 30px;
`;

const FigCaption = styled('figcaption')`
  margin-top: 20px;
`;

const LocationImg = styled('img')`
  padding: 0.5rem;
  cursor: pointer;
`;

const quoteArr = [
  {
    name: 'Peter Soto',
    body: `If you're looking for some good barbecue I would have to recommend black box barbecue at Shawnee Mission Parkway and Pflumm.`,
    img: {
      src: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Peter Soto',
    },
  },
  {
    name: 'Bryan Marvin',
    body: `If you're looking for some entertainment, I would recommend checking out Westport or the Power and Light district.`,
    img: {
      src: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Bryan Marvin',
    },
  },
  {
    name: 'Jay Sullivan',
    body: `If you like live music, check out The Crossroads!`,
    img: {
      src: 'https://bulma.io/images/placeholders/128x128.png',
      alt: 'Jay Sullivan',
    },
  },
];

class LocationMain extends React.Component {
  state = {
    activeImg: null,
    activeAlt: null,
  };
  _handleClick = (img, alt) => {
    this.setState({ activeImg: img, activeAlt: alt });
  };
  _renderLocationQuotes = (arr) => {
    const quotes = [];
    for (let i = 0; i < arr.length; i += 1) {
      quotes.push(
        <LocationQuote
          name={arr[i].name}
          body={arr[i].body}
          img={arr[i].img}
          key={'key' + i}
        />,
      );
    }
    return quotes;
  };
  render() {
    return (
      <LocationSection className="section">
        <div className="container content">
          <h1>We are based in the USA in Kansas City, MO</h1>
          <div className="columns">
            <div className="column">
              <LocationImg
                onClick={() =>
                  this._handleClick(
                    '/static/img/kansas1.jpg',
                    'Wide shot of the Nelson Atkins Museum',
                  )
                }
                src="/static/img/kansas1.jpg"
                alt="Wide shot of the Nelson Atkins Museum"
              />
            </div>
            <div className="column">
              <LocationImg
                onClick={() =>
                  this._handleClick(
                    '/static/img/kansas2.jpg',
                    'The Nelson Atkins Museum with two of its signature giant shuttlecocks in the foreground.',
                  )
                }
                src="/static/img/kansas2.jpg"
                alt="The Nelson Atkins Museum with two of its signature giant shuttlecocks in the foreground."
              />
            </div>
            <div className="column">
              <LocationImg
                onClick={() =>
                  this._handleClick(
                    '/static/img/kansas3.jpg',
                    'Wide shot of downtown',
                  )
                }
                src="/static/img/kansas3.jpg"
                alt="Wide shot of downtown"
              />
            </div>
          </div>
          <p>
            Fennec Industries was founded by two grads of the University of
            Kansas.
          </p>
          <p className="help">
            We promise we won't let emotion get in the way if you're a Raiders
            fan.
          </p>
          <br />
          {this.state.activeImg ? (
            <Figure className="image">
              <img src={this.state.activeImg} alt={this.state.activeAlt} />
              <FigCaption>{this.state.activeAlt}</FigCaption>
            </Figure>
          ) : null}
          <br />
          {this._renderLocationQuotes(quoteArr)}
        </div>
      </LocationSection>
    );
  }
}

export default LocationMain;
