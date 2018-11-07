import * as React from 'react';
import styled, { css } from 'react-emotion';

const HeroWrapper = styled('section')`
  min-height: 40vh;
  padding: 0 !important;
  background-color: #b58c52;
  background: url('/static/img/hero-1080-high.jpg') center / cover;
`;

const HeroBody = styled('div')`
  min-height: 40vh;
  padding: 5rem 0;
  background-color: rgba(136, 66, 41, 0.25);
  font-family: 'Cabin', sans-serif;
`;

const HeroContainer = styled('div')``;

const HeroColumn = styled('div')`
  min-height: 40vh;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    max-width: 90vw;
  }
  p {
    max-width: 90vw;
  }
  hr {
    min-width: 90%;
    margin: 1rem 1.5rem 0.5rem 1.5rem;
  }
`;

const headingAnim = css`
  @keyframes enter {
    0% {
      left: -4500px;
    }
    100% {
      left: 0px;
    }
  }
  position: relative;
  left: -4000px;
`;

const HeroHeadingOne = styled('h1')`
  min-width: 420px;
  font-size: 5rem;
  font-family: 'gotham';
  color: #eaeaea;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    min-width: 0;
    font-size: 4.5rem;
  }
  animation: enter 1.8s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards
    running;
`;

const HeroHeadingTwo = styled('h1')`
  animation-delay: 0.5s !important;
  min-width: 420px;
  font-size: 5rem;
  font-family: 'gotham';
  color: #eaeaea;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    min-width: 0;
    font-size: 4.5rem;
  }
  animation: enter 1.8s cubic-bezier(0.25, 0.8, 0.25, 1) 1s 1 normal forwards
    running;
`;

const HeroHeadingThree = styled('h1')`
  animation-delay: 1s !important;
  min-width: 420px;
  font-size: 5rem;
  font-family: 'gotham';
  color: #eaeaea;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    min-width: 0;
    font-size: 4.5rem;
  }
  animation: enter 1.8s cubic-bezier(0.25, 0.8, 0.25, 1) 2s 1 normal forwards
    running;
`;

const icon = css`
  font-size: 2rem;
`;

const HeroSubHeading = styled('h2')`
  line-height: 1.1;
  font-size: 3.2rem;
  font-weight: 800;
  color: #f7f7f7;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  span {
    color: #0a0a0a;
    transition: 0.333s all ease-in;
  }
`;

const spanLeaving = css`
  opacity: 0;
`;

const spanEntering = css`
  opacity: 0;
`;

const spanEntered = css`
  opacity: 1;
`;

const HeroParagraph = styled('p')`
  padding-top: 10px;
  line-height: 1.3;
  font-size: 1.5rem;
  font-weight: 500;
  color: #f7f7f7;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
`;

const HeroButton = styled('a')`
  width: 50%;
  min-width: 215px;
  max-width: 250px;
  margin-top: 30px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.25s all ease-out;
  :hover {
    transform: translateY(-0.1rem);
    background-color: #fff !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.12);
  }
`;

const envelopeWrapper = css`
  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(0deg);
    }
    58% {
      transform: rotate(7deg);
    }
    80% {
      transform: rotate(-7deg);
    }
  }
  animation: 1.5s infinite wiggle;
  height: 29px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: rotate(0deg);
`;

const words = [
  'Websites',
  'Applications',
  'Strategies',
  'Experiences',
  'Treatment',
  'Information',
];

class Hero extends React.Component {
  state = {
    activeWord: words[0],
    spanClass: spanEntered,
  };
  componentDidMount() {
    let i = 0;
    const int = setInterval(() => {
      i += 1;
      if (i === words.length) {
        i = 0;
      }
      this.setState({ spanClass: spanLeaving });
      setTimeout(() => {
        this.setState({ activeWord: words[i], spanClass: spanEntering });
      }, 333);
      setTimeout(() => {
        this.setState({ spanClass: spanEntered });
      }, 666);
    }, 5000);
  }
  render() {
    return (
      <HeroWrapper className="hero">
        <HeroBody className="hero-body">
          <HeroContainer className="container">
            <div className="columns">
              <HeroColumn className="column is-6 has-text-left">
                <HeroHeadingOne className={`${headingAnim} title`}>
                  <i className={`fas fa-check ${icon}`} /> Quick
                </HeroHeadingOne>
                <HeroHeadingTwo className={`${headingAnim} title`}>
                  <i className={`fas fa-check ${icon}`} /> Targeted
                </HeroHeadingTwo>
                <HeroHeadingThree className={`${headingAnim} title`}>
                  <i className={`fas fa-check ${icon}`} /> Planned
                </HeroHeadingThree>
              </HeroColumn>
              <HeroColumn className="column has-text-centered">
                <HeroSubHeading>
                  Modern Consumers Need Modern{' '}
                  <span className={this.state.spanClass}>
                    {this.state.activeWord}
                  </span>
                </HeroSubHeading>
                <hr />
                <HeroParagraph className="has-text-justified">
                  In today's fast paced world, your window to market is getting
                  smaller and smaller. What you need is a high performance
                  website or app that delivers your message quickly.
                </HeroParagraph>
                <HeroParagraph className="has-text-justified">
                  Is your website optimized? Is it reaching your target
                  audience?
                </HeroParagraph>
                <HeroButton
                  href="/#contact"
                  className="button is-medium is-outlined is-inverted is-link"
                >
                  Contact us today{' '}
                  <div className={envelopeWrapper}>
                    <i className="fas fa-envelope" />
                  </div>
                </HeroButton>
              </HeroColumn>
            </div>
          </HeroContainer>
        </HeroBody>
      </HeroWrapper>
    );
  }
}

export default Hero;
