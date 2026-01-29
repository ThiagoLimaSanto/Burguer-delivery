const getToken = (req) => {
  let token = null;
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  return token;
};

module.exports = getToken