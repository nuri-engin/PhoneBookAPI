const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

// TODOs:
// 1. Research if more elegent way to exist to define phonenumbers, validators etc.
// 2. A better Regex should be applied, etc.
// 3. Apply `/constants/errorMessages` feature!
const phoneNumberRegex = /[0-9]/;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    address: {
      type: String,
      trim: true,
    },
    workNumber: {
      type: Number,
      validate: {
        validator(v) {
          return phoneNumberRegex.test(v);
        },
        message: '{VALUE} is not a valid work phone number!',
      },
    },
    homeNumber: {
      type: Number,
      validate: {
        validator(v) {
          return phoneNumberRegex.test(v);
        },
        message: '{VALUE} is not a valid work phone number!',
      },
    },
    mobileNumber: {
      type: Number,
      validate: {
        validator(v) {
          return phoneNumberRegex.test(v);
        },
        message: '{VALUE} is not a valid work phone number!',
      },
    },
    otherNumber: {
      type: Number,
      validate: {
        validator(v) {
          return phoneNumberRegex.test(v);
        },
        message: '{VALUE} is not a valid work phone number!',
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
