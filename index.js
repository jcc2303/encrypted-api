console.log('encrypted-api');

const express = require("express");

const PORT = 1234;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
