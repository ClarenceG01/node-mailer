const express = require("express");
const emailHandler = require("./controllers/emailController");
require("dotenv").config();
const app = express();

app.use(express.json());
app.get("/email", emailHandler);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
