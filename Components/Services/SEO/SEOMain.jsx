import * as React from 'react';
import styled from 'react-emotion';

const SEOSection = styled('section')`
  min-height: calc(100vh - 192px);
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

class SEOMain extends React.Component {
  render() {
    return (
      <SEOSection className="section content">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Search Engine Optimization</h1>
              <p>
                Its no secret how important organic search traffic is to a
                business. We at Fennec Industries know that the days of SEO
                'tricks' are gone and past. We focus on quality page building
                and content, aligning with Google's philosophy that providing
                what your customers want is the best thing you can do for your
                website.
              </p>
              <p>
                Of course, you can hurt your website's search rankings if you
                don't provide the information needed for web crawlers. Correctly
                utilizing semantic HTML5 elements is something a lot of web
                development companies don't get right. Search engines reward
                websites that have their elements correctly labeled.
              </p>
              <p>
                Aside from providing web crawlers the most correct information
                of your website, using semantic elements helps people who use
                assistive technology such as screen readers.
              </p>
              <hr />
              <h2>SEO Services</h2>
              <p>We can provide consultation on the SEO of your website.</p>
              <p>Don't lose potential customers to sloppy web development.</p>
              <ContactButton
                href="/#contact"
                className="button is-outlined is-medium is-link is-3"
              >
                Contact us today <i className="fas fa-envelope" />
              </ContactButton>
            </div>
          </div>
        </div>
      </SEOSection>
    );
  }
}

export default SEOMain;
