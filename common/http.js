import 'isomorphic-fetch';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const ENV = process.env.NODE_ENV || 'development';
const SERVER_PATH =
  ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://fennecindustries-env.j9wtpbwsps.us-east-2.elasticbeanstalk.com';

export const getAllPosts = () => {
  const options = {
    method: 'GET',
    headers: requestHeaders,
  };

  return fetch(`${SERVER_PATH}/api/posts`, options);
};

export const submitForm = (data) => {
  const options = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(data),
  };

  return fetch(`${SERVER_PATH}/api/contact`, options);
};
