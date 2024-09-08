exports.welcome = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Welcome to the API. !",
      "version": "0.0.1"
    }),
  };
};
