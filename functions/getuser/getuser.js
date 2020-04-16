const fetch = require("cross-fetch");


async function getUsers(){
  return fetch('https://focused-curie-bbc126.netlify.app/api/users').then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  });
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const users = await getUsers();
    console.log(users);
    return {
      statusCode: 200,
      body: JSON.stringify(users)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
