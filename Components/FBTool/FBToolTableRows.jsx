import * as React from 'react';
import styled, { css } from 'react-emotion';

const StyledTableRow = styled('tr')``;

class FBToolTableRows extends React.Component {
  _calculateAverage = () => {
    const { data } = this.props;
    console.log(data);
    const dataLength = data.length;
    let reviewNum = 0;
    let average = 0;
    for (let i = 0; i < dataLength; i += 1) {
      if (!isNaN(data[i].rating)) {
        reviewNum += 1;
        average += data[i].rating;
      }
    }
    average /= reviewNum;
    return <p>{average.toFixed(2)}</p>;
  };

  render() {
    const { data, name } = this.props;
    return (
      <StyledTableRow>
        <td>{name}</td>
        <td>{data.length}</td>
        <td>{this._calculateAverage()}</td>
      </StyledTableRow>
    );
  }
}

export default FBToolTableRows;
