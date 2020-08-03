const Interceptors = {
  //Request Interceptors
  logRequest(req) {
    console.log(`${req.method} ${req.url}`);
    return req;
  },

  //Response Interceptors
  logResponse(res) {
    const numResponses = res.data ? res.data.totalItems : 0;
    console.log(`${numResponses} total hits in search`);
    return res;
  },

  changeThumbToHTTPS(res) {
    if (res.data.items) {
      res.data.items.forEach((res) => {
        let thumbnail = res.volumeInfo.imageLinks
          ? res.volumeInfo.imageLinks.thumbnail
          : false;
        if (thumbnail) {
          const matchBeginning = /^http/;
          const httpsThumbnail = thumbnail.replace(matchBeginning, "https");
          res.volumeInfo.imageLinks.thumbnail = httpsThumbnail;
          return;
        }
      });
    }
    return res;
  },
};

export default Interceptors;
