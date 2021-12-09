const auth = () => async (req, res, next) => {
  return new Promise((resolve) => {
    resolve(true);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
