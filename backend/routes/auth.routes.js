const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

/*
 * @route  -> POST /api/auth/register
 * @desc   -> allows user to register.
 * @access -> public
 */
router.post("/register", async (req, res) => {
  const { error } = User.registerValidation(req.body);
  if (error) {
    if (error.details[0].type === "any.only") {
      return res
        .status(400)
        .send({ success: false, message: "password must match" });
    }
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });
  }
  try {
    const user = new User(req.body);
    await user.save();
    const token = user.getAuthToken();
    res.status(201).send({ success: true, data: token });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .send({ success: false, message: "Email already exists" });
    }

    res.status(500).send({ success: false, message: err.message });
  }
});

module.exports = router;
