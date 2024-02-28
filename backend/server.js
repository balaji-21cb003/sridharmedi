// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors= require("cors");

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/sridharmedi", {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// const FormSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: String,
//     phoneNumber: String,
//   },
//   { collection: "callrequestform" }
// );

// const FormModel = mongoose.model("Form", FormSchema);

// app.post("/submit-form", async (req, res) => {
//   const { name, email, phoneNumber } = req.body;

//   const formData = new FormModel({ name, email, phoneNumber });

//   try {
//     await formData.save();
//     res.status(201).json({ message: "Form submitted successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error submitting form." });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect("mongodb://localhost:27017/sridharmedi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define form schema and model
const formSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
  },
  { collection: "callrequestform" }
);

const FormModel = mongoose.model("Form", formSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "doctocare7@gmail.com",
    pass: "txgqylxonjcdzjjo",
  },
});

// Function to send email using Nodemailer
async function sendEmail(name, email, phoneNumber) {
  try {
    // Email content
    const mailOptions = {
      from: "doctocare7@gmail.com",
      to: "balaji07srp@gmail.com, guruguru6631@gmail.com, hemanth.m2021csbs@sece.ac.in",
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}`,
    };

    // Sending email asynchronously
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}

// POST endpoint for form submission
app.post("/submit-form", async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  try {
    // Save form data to the database
    const formData = new FormModel({ name, email, phoneNumber });
    await formData.save();

    // Send email notification
    await sendEmail(name, email, phoneNumber);

    console.log("Form submitted successfully");
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Error submitting form." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
