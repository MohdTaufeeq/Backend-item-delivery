const mongoose = require("mongoose");

const itemData = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Enter Your name"],
    },
    lastName: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    email: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    mobileNumber: {
      type: Number,
      // required: [true, "Enter Your name"],
    },
    address: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    city: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    zipcode: {
      type: Number,
      // required: [true, "Enter Your name"],
    },
    nameOnCard: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    cardNumber: {
      type: Number,
      // required: [true, "Enter Your name"],
    },
    expiryDate: {
      type: String,
      // required: [true, "Enter Your name"],
    },
    cvv: {
      type: Number,
      // required: [true, "Enter Your name"],
    },
    billAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemData);
