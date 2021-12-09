const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createContact = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
    address: Joi.string(),
    workNumber: Joi.string(),
    homeNumber: Joi.string(),
    mobileNumber: Joi.string(),
    otherNumber: Joi.string(),
  }),
};

const getContacts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getContact = {
  params: Joi.object().keys({
    contactId: Joi.string().custom(objectId),
  }),
};

const updateContact = {
  params: Joi.object().keys({
    contactId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      name: Joi.string(),
      address: Joi.string(),
      workNumber: Joi.string(),
      homeNumber: Joi.string(),
      mobileNumber: Joi.string(),
      otherNumber: Joi.string(),
    })
    .min(1),
};

const deleteContact = {
  params: Joi.object().keys({
    contactId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};
