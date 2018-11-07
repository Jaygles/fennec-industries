import * as React from 'react';
import styled from 'react-emotion';
import Router from 'next/router';
import Technology from './Technology';
import TechnologyParagraph from './TechnologyParagraph';

const TechnologySection = styled('section')``;

const TechnologyHeading = styled('h2')`
  padding-bottom: 3rem;
  font-size: 4em !important;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.07);
  font-family: 'gothambold';
`;

const TechnologyColumns = styled('div')`
  max-width: 1200px;
  padding-bottom: 1rem;
  margin: auto;
`;

const techArr = [
  {
    mainContent: {
      title: `ES6`,
      body: `ES6 is the latest major update to Javascript. It is essential for any modern React.js based website. We use the most cutting edge Javascript technology to stay ahead of the competition.`,
    },
    img: {
      src: '/static/logo/es6.png',
      alt: 'ES6',
    },
  },
  {
    mainContent: {
      title: `CSS3`,
      body: `CSS3 is a powerful and woefully underused website technology. The most performant and advacned websites will use everything CSS3 offers to produce a wonderful consumer experience.`,
    },
    img: {
      src: '/static/logo/CSS3@1x.png',
      alt: 'CSS3',
    },
  },
  {
    mainContent: {
      title: `HTML5`,
      body: `HTML5 is the latest iteration of the HTML standard. It is important to use everything HTML5 has to offer to boost your website's SEO.`,
    },
    img: {
      src: '/static/logo/HTML5_256.png',
      alt: 'HTML 5',
    },
  },
  {
    mainContent: {
      title: `jQuery`,
      body: `jQuery has been in use for well over a decade. We don't use jQuery in anything new, but if you have a jQuery website that needs updated be sure we will optimize what needs to be optimized and replace and needs to be replaced.`,
    },
    img: {
      src: '/static/logo/jQuery@1x.png',
      alt: 'jQuery',
    },
  },
  {
    mainContent: {
      title: `Bootstrap`,
      body: `Bootstrap by Twitter is the most popular CSS framework on the web. A CSS framework ensures responsiveness compatible across a wide array of browsers. We prefer using Bulma but Bootstrap is available by request.`,
    },
    img: {
      src: '/static/logo/Bootstrap.png',
      alt: 'Bootstrap',
    },
  },
  {
    mainContent: {
      title: `Bulma`,
      body: `Bulma is a CSS framework based on Flexbox, a modern CSS technology. Bulma, unlike Bootstrap, is a pure CSS framework which ensures performance and better compatibility. This website uses Bulma!`,
    },
    img: {
      src: '/static/logo/Bulma.png',
      alt: 'Bulma',
    },
  },
  {
    mainContent: {
      title: `Node JS`,
      body: `Node JS is our choice of backend technology. Those familiar with web servers but haven't kept up with the latest trends might find it surprising that a Javascript based web server is emerging as a powerful and popular option. Node JS is based off of Google Chrome's V8 engine.`,
    },
    img: {
      src: '/static/logo/Nodejs.png',
      alt: 'Node JS',
    },
  },
  {
    mainContent: {
      title: `Less`,
      body: `Less, like Sass is a powerful CSS extension. Some people prefer Less over Sass so we have this available as an option.`,
    },
    img: {
      src: '/static/logo/LESS.png',
      alt: 'Less',
    },
  },
  {
    mainContent: {
      title: `Sass`,
      body: `Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. Using Sass, we can pump out performant and quality website styles in a timely manner.`,
    },
    img: {
      src: '/static/logo/Sass.png',
      alt: 'Sass',
    },
  },
  {
    mainContent: {
      title: `React JS`,
      body: `React.js by Facebook is taking over the web by storm. It's unique use of a 'Shadow DOM' can squeeze out the most performance even out of old and outdated devices. React's easy to use component based written syntax means less time developing and more time ensuring you get the most quality product for your money.`,
    },
    img: {
      src: '/static/logo/react.png',
      alt: 'React JS',
    },
  },
  {
    mainContent: {
      title: `Next JS`,
      body: `Next JS is our choice of server side rendering technologies for React.js. Server side rendering is better for SEO and initial page load times. We reccomend server side rendering for a better consumer experience.`,
    },
    img: {
      src: '/static/logo/next-js.png',
      alt: 'Next JS',
    },
  },
];

class Technologies extends React.Component {
  state = {
    activeTech: { img: {}, mainContent: {} },
  };
  _handleClick = (img, mainContent, current) => {
    if (!current) {
      this.setState({ activeTech: { img, mainContent } });
      if (window.innerWidth <= 768) {
        Router.push('/#tech');
      }
    }
  };
  _renderTechnologyIcons = (arr) => {
    const techs = [];
    for (let i = 0; i < arr.length; i += 1) {
      techs.push(
        <Technology
          current={this.state.activeTech.img.src === arr[i].img.src}
          key={arr[i].img.alt}
          mainContent={arr[i].mainContent}
          img={arr[i].img}
          _handleClick={this._handleClick}
        />,
      );
    }
    return techs;
  };
  render() {
    return (
      <TechnologySection className="section">
        <div className="container content">
          <TechnologyHeading className="has-text-centered">
            Technologies
          </TechnologyHeading>
          <TechnologyColumns className="columns is-multiline is-centered has-text-centered">
            {this._renderTechnologyIcons(techArr)}
          </TechnologyColumns>
          {this.state.activeTech.img.src ? (
            <div className="columns is-centered">
              <TechnologyParagraph activeTech={this.state.activeTech} />
            </div>
          ) : null}
        </div>
      </TechnologySection>
    );
  }
}

export default Technologies;
