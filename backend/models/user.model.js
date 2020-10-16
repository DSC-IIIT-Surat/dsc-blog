const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../config/keys");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    confirmPassword: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.registerValidation = data => {
  const schema = Joi.object({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().trim().min(8).max(40),
    confirmPassword: Joi.any().equal(Joi.ref("password")).required(),
  });

  return schema.validate(data);
};

userSchema.methods.getAuthToken = function () {
  const user = this;

  const token = jwt.sign({ _id: user._id }, keys.jwtSecret, {
    expiresIn: 360000,
  });

  return token;
};

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  user.confirmPassword = await bcrypt.hash(user.confirmPassword, 10);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
