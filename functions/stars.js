import fetch from "node-fetch";
// const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { FEEDBIN_KEY } = process.env;
  const params = JSON.parse(event.body);
  const page = params.page || 0;
  const howMany = params.howMany || 20;
  const API_ENDPOINT = `https://api.feedbin.com/v2/entries.json?starred=true&per_page=${howMany}&page=${page}`;

  return fetch(API_ENDPOINT, { headers: { Accept: 'application/json', authorization: `Basic ${FEEDBIN_KEY}` } })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(
        data,
      ),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
