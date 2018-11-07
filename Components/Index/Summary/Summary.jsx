import * as React from 'react';
import styled from 'react-emotion';

const SummarySection = styled('section')``;

const SummaryColummn = styled('div')`
  padding: 0.75rem 3.5rem 0.75rem 3.5rem;
  color: #bf4f4f;
  p {
    color: #4a4a4a;
  }
`;

class Summary extends React.Component {
  render() {
    return (
      <SummarySection className="section">
        <div className="container has-text-centered">
          <div className="columns">
            <SummaryColummn className="column content">
              <i className="fas fa-tachometer-alt fa-7x" />
              <h2>Speed</h2>
              <p>
                Less than one second of load time could be the difference
                between a bounce or a conversion.
              </p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
            <SummaryColummn className="column content">
              <i className="fas fa-align-center fa-7x" />
              <h2>Content</h2>
              <p>
                The right content will improve your SEO and attract your most
                appropriate consumers.
              </p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
            <SummaryColummn className="column content">
              <i className="fas fa-asterisk fa-7x" />
              <h2>Detail</h2>
              <p>
                Attention to detail is the bare minimum. These days any blemish
                stands out like the sun in the sky.
              </p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
          </div>
          <div className="columns">
            <SummaryColummn className="column content">
              <i className="fas fa-at fa-7x" />
              <h2>Web 2.0</h2>
              <p>A changing webscape necessitates a change of strategy.</p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
            <SummaryColummn className="column content">
              <i className="fas fa-dollar-sign fa-7x" />
              <h2>Sales</h2>
              <p>Designing with purpose can help you reach your goals.</p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
            <SummaryColummn className="column content">
              <i className="fab fa-medapps fa-7x" />
              <h2>Innovate</h2>
              <p>
                Staying ahead provides a priceless edge up on the competition.
              </p>
              {/* <a>
                Learn More <i className="far fa-hand-point-right" />
              </a> */}
            </SummaryColummn>
          </div>
        </div>
      </SummarySection>
    );
  }
}

export default Summary;
