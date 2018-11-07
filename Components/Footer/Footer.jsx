import * as React from 'react';
import Link from 'next/link';
import styled, { css } from 'react-emotion';

const StyledFooter = styled('footer')`
  font-family: myriad;
  padding: 2rem 1.5rem 2rem;
  background-color: #272727;
  color: #fefefe;
  font-size: 93%;
  letter-spacing: 0.5px;
  a {
    &:hover {
      color: #f7f7f7;
    }
  }
`;

const VerticalColumn = styled('div')`
  min-width: 250px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    text-align: center !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

const darkText = css`
  color: #adadad;
`;

const NavigationColumn = styled('div')`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    text-align: center !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

const NavigationColumns = styled('div')`
  @media screen and (max-width: 940px) {
    flex-direction: column;
    text-align: center;
    a {
      padding-top: 5px;
    }
  }
`;

const NavigationSubColumn = styled('div')`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    text-align: center !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

const FormContainer = styled('div')`
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;

const mobileControlStyles = css`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const topPadding = css`
  padding-top: 10px;
  @media screen and (min-width: 769px) {
    margin-left: 0rem;
  }
`;

const ThinHr = styled('hr')`
  width: 100%;
  margin: 0.5rem 0;
`;

const SocialColumn = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SocialIconsContainer = styled('div')`
  width: 100%;
  max-width: 250px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

const margin20 = css`
  margin-left: 20px;
  margin-right: 20px;
`;

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter className="footer">
        <div className="container">
          <div className="columns">
            <VerticalColumn className="column content has-text-left">
              <p>Join the Newsletter</p>
              <p className={darkText}>
                Join over 20,000 people who receive bi-monthly updates
              </p>
              <FormContainer className={`columns ${topPadding}`}>
                <div className="field is-horizontal">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      className={`input`}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </p>
                </div>
                <div className="field is-horizontal">
                  <div className="field-body">
                    <div className="field">
                      <div className={`control ${mobileControlStyles}`}>
                        <button className="button is-outlined is-danger">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FormContainer>
            </VerticalColumn>
            <VerticalColumn className="column content has-text-justified">
              <p>Our Commitment to Quality</p>
              <p className={darkText}>
                We stick to our word when we say we are dedicated to delivering
                a 100% satisfactory product. Afterall, it is what you are paying
                for. Here at Fennec Industries quality is second to none.
              </p>
            </VerticalColumn>
            <SocialColumn className="column content has-text-centered">
              <p>Stay Connected</p>
              <SocialIconsContainer>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-3x" />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-google-plus-square fa-3x" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter-square fa-3x" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </SocialIconsContainer>
            </SocialColumn>
            <NavigationColumn className="column content has-text-left">
              <p className="has-text-centered">Navigation</p>
              <NavigationColumns className="columns">
                <NavigationSubColumn>
                  <Link href="/work">
                    <a>Our Work</a>
                  </Link>
                  <Link href="/services/development">
                    <a>Professional Web Development</a>
                  </Link>
                  <Link href="/services/seo">
                    <a>Search Engine Optimization</a>
                  </Link>
                  <Link href="/services/social">
                    <a>Social Media Marketing</a>
                  </Link>
                </NavigationSubColumn>
                <NavigationSubColumn>
                  <Link href="/about/location">
                    <a>Location</a>
                  </Link>
                  <Link href="/about/team">
                    <a>Our Team</a>
                  </Link>
                  <Link href="/#testimonials">
                    <a>Testimonials</a>
                  </Link>
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                  <Link href="/services/video">
                    <a>Video Marketing</a>
                  </Link>
                </NavigationSubColumn>
              </NavigationColumns>
            </NavigationColumn>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <ThinHr />
              <p>&copy; 2018 Fennec Industries Llc.</p>
              <Link href="/privacy-policy">
                <a className={margin20}>Privacy Policy</a>
              </Link>
              <Link href="/sitemap.xml">
                <a className={margin20}>Sitemap</a>
              </Link>
            </div>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
