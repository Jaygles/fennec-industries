import * as React from 'react';
import * as HTTP from '../common/http';

const getInitialStateData = async () => {
  const postsRequest = await HTTP.getAllPosts();
  const posts = await postsRequest.json();
  const postData = await posts.data.data;

  return {
    postData,
  };
};

function withData(ComposedComponent) {
  return class Data extends React.Component {
    static async getInitialProps() {
      let initialState = { ...(await getInitialStateData()) };
      return {
        initialState,
      };
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
}

export default withData;
