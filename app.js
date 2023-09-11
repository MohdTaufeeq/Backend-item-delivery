const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/conn");
const port = process.env.PORT || 9000;
const Item = require("./model/items");
const bodyParser = require("body-parser");
const cors = require("cors");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("test");
});

app.post("/api/saveItem", async (req, res) => {
  var body = req.body;
  console.log(body);
  const item = await Item.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    mobileNumber: body.mobileNumber,
    address: body.address,
    city: body.city,
    zipcode: body.zipcode,
    nameOnCard: body.nameOnCard,
    cardNumber: body.cardNumber,
    expiryDate: body.expiryDate,
    cvv: body.cvv,
    billAmount: body.billAmount,
  });
  res.json({
    status: "success",
  });
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
