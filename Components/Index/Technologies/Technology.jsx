import * as React from 'react';
import styled, { css } from 'react-emotion';
import TechnologyParagraph from './TechnologyParagraph';

const TechnologyIconWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    filter: drop-shadow(4px 4px 4px #4a4a4a60);
  }
`;

const TechnologyIcon = styled('img')`
  max-height: 100px;
  max-width: 250px;
  filter: grayscale(0);
  transition: 0.1s all ease-out;
`;

const isCurrent = css`
  filter: grayscale(1) !important;
`;

class Technology extends React.Component {
  render() {
    const { current, img, mainContent, _handleClick } = this.props;
    return (
      <TechnologyIconWrapper
        id={img.alt === 'Next JS' ? 'tech' : null}
        onClick={() => _handleClick(img, mainContent, current)}
        className="column is-narrow"
      >
        <TechnologyIcon
          className={current ? isCurrent : null}
          src={img.src}
          alt={img.alt}
        />
      </TechnologyIconWrapper>
    );
  }
}

export default Technology;
