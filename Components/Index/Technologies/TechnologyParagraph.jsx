import * as React from 'react';
import styled, { css } from 'react-emotion';

const ParagraphWrapper = styled('div')`
  max-width: 600px;
  margin-top: 50px;
  transition: 0.5s all;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const HeadingContainer = styled('div')`
  justify-content: center;
`;

const TechnologyIcon = styled('img')`
  max-height: 100px;
  max-width: 250px;
  opacity: 0;
`;

const entered = css`
  transition: 0.05s all ease-out;
  opacity 1;
`;

const Heading = styled('h2')`
  margin: 0.5714em !important;
`;

const Paragraph = styled('p')`
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 130%;
`;

class TechnologyParagraph extends React.Component {
  state = {
    iconClass: null,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ iconClass: entered });
    }, 200);
  }
  componentWillReceiveProps() {
    this.setState({
      iconClass: null,
    });
    setTimeout(() => {
      this.setState({ iconClass: entered });
    }, 200);
  }
  render() {
    const { activeTech } = this.props;
    const body = activeTech.mainContent.body;
    const src = activeTech.img.src;
    const img = activeTech.img;
    return (
      <ParagraphWrapper className={`column has-text-centered is-narrow`}>
        <TechnologyIcon
          className={this.state.iconClass}
          src={src}
          alt={img.alt}
        />
        {body ? <Paragraph>{body}</Paragraph> : null}
      </ParagraphWrapper>
    );
  }
}

export default TechnologyParagraph;
