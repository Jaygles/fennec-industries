import * as React from 'react';
import styled from 'react-emotion';

const DevelopmentSection = styled('section')`
  min-height: calc(100vh - 220px);
`;

const ContactButton = styled('a')`
  width: 25%;
  min-width: 275px;
  margin-top: 30px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

class DevelopmentMain extends React.Component {
  render() {
    return (
      <DevelopmentSection className="section content">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Web Development</h1>
              <p>
                Here at Fennec Industries we follow three main ideologies when
                it comes to web design and development.
              </p>
              <ul>
                <li>Speedy</li>
                <li>Semantic</li>
                <li>Simple</li>
              </ul>
              <p>
                In our hectic world, where your consumer's attention comes at a
                premium, anything you can do to deliver your message quickly and
                accurately is important above all else. Thats why a primary
                focus of ours is web page loading speed. According to Google,{' '}
                <a
                  href="https://www.thinkwithgoogle.com/marketing-resources/experience-design/mobile-page-speed-load-time/"
                  rel="noreferrer"
                  target="_blank"
                >
                  "40% of consumers will leave a page that takes longer than
                  three seconds to load"
                </a>
                . When last tested, this webpage's first meaningful paint took
                260ms, thats 26.5 times faster than the industry average of 6.9
                seconds.
              </p>
              <p>
                Search engine optimisation is an industry in itself. With
                countless firms promising to take your webpage to the front of
                the line. Fennec Industries started as a marketing company with
                a specialization of SEO. Deep SEO industry experience comes
                behind every website and app from Fennec Industries.
              </p>
              <p>
                Following the trend of a shrinking window of opportunity to
                reaching your consumer, we follow the age old addage of
                K.I.S.S., or 'Keep It Simple Stupid'. Another report written by
                Google claims that{' '}
                <a
                  href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/"
                  rel="noreferrer"
                  target="_blank"
                >
                  "as the number of elements—text, titles, images—on a page goes
                  from 400 to 6,000, the probability of conversion drops 95%"
                </a>
                . That's why we avoid bloat or unnecessary content and
                animations. Everything on the webpage should serve a purpose, to
                deliver your message as quickly and efficiently as possible.
                Your consumers will thank you for respecting their time.
              </p>
              <h2>Interested in learning more?</h2>
              <ContactButton
                href="/#contact"
                className="button is-outlined is-medium is-link is-3"
              >
                Contact us today <i className="fas fa-envelope" />
              </ContactButton>
            </div>
          </div>
        </div>
      </DevelopmentSection>
    );
  }
}

export default DevelopmentMain;
