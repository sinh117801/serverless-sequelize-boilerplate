module.exports = {
  responseHandler: (statusCode, data) => ({
    statusCode,
    body: JSON.stringify({
      status: statusCode,
      data
    }),
  }),
  errorHandler: (statusCode, data) => {
    const errorRes = data

    return {
      statusCode,
      body: JSON.stringify({
        status: statusCode,
        data: errorRes
      }),
    }
  }
};