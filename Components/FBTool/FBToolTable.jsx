import * as React from 'react';
import FBToolTableRows from './FBToolTableRows';

class FBToolTable extends React.Component {
  render() {
    const { tableData } = this.props;
    return <FBToolTableRows name={tableData.name} data={tableData.data} />;
  }
}

export default FBToolTable;
