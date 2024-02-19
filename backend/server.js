const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors= require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/sridharmedi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const FormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
  },
  { collection: "callrequestform" }
);

const FormModel = mongoose.model("Form", FormSchema);

app.post("/submit-form", async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  const formData = new FormModel({ name, email, phoneNumber });

  try {
    await formData.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
