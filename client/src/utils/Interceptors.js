const Interceptors = {
  logRequest(req) {
    console.log(`${req.method} ${req.url}`);
    return req;
  },

  logResponse(res) {
    const numResponses = res.data ? res.data.totalItems : 0;
    console.log(`${numResponses} total hits in search`);
    return res;
  },
};

export default Interceptors;
