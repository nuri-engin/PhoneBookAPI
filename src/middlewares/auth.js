const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    const token = 'AnyToken';

    // TODO: Generate '/constants' folder and 'responseMessages' file to keep http-request response texts in a maintable approach.
    const rejectResponseMsg = 'Please authenticate';

    // eslint-disable-next-line no-unused-expressions
    token ? resolve(true) : reject(new ApiError(httpStatus.UNAUTHORIZED, rejectResponseMsg));
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
