import * as React from 'react';
import styled from 'react-emotion';
import Example from './Example';

const exampleArr = [
  {
    name: 'Horizon Hills',
    description: [
      'Website design and development',
      'website hosting and maintainance',
      'digital marketing',
      'SEO optimization',
      'video marketing',
      'graphic design',
    ],
    img: { src: '/static/img/HH.png', alt: 'Horizon Hills' },
    url: 'https://www.horizonhillscampionco.com/',
  },
  {
    name: 'March For Moms',
    description: [
      'Website design and development',
      'Wordpress CMS',
      'website maintainance',
      'digital marketing',
    ],
    img: { src: '/static/img/MfM.png', alt: 'March For Moms' },
    url: 'http://www.marchformoms.org',
  },
  {
    name: 'Strat Prop Management',
    description: [
      'Website design and development',
      'Wordpress CMS',
      'website hosting and maintainance',
      'digital marketing',
    ],
    img: { src: '/static/img/Strat.png', alt: 'Strat Prop Management' },
    url: 'http://www.stratprop.com/',
  },
];

class WorkMain extends React.Component {
  _renderExamples = () => {
    const examples = [];
    for (let i = 0; i < exampleArr.length; i += 1) {
      examples.push(
        <Example
          key={exampleArr[i].img.src}
          name={exampleArr[i].name}
          description={exampleArr[i].description}
          img={exampleArr[i].img}
          url={exampleArr[i].url}
        />,
      );
    }
    return examples;
  };
  render() {
    return (
      <section className="section">
        <div className="container content">{this._renderExamples()}</div>
      </section>
    );
  }
}

export default WorkMain;
