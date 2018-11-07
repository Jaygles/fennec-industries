import * as React from 'react';
import FBToolTable from './FBToolTable';

class FBToolTables extends React.Component {
  _renderTables = () => {
    const tablesArr = [];
    const tablesData = this.props.tablesData;
    const tablesDataLength = tablesData.length;
    for (let i = 0; i < tablesDataLength; i += 1) {
      tablesArr.push(<FBToolTable tableData={tablesData[i]} />);
    }
    return tablesArr;
  };

  render() {
    return (
      <div className="column is-6 is-offset-3">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Facility</th>
              <th>Reviews</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>{this._renderTables()}</tbody>
        </table>
      </div>
    );
  }
}

export default FBToolTables;
