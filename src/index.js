const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();
const { db, QueryTypes } = require('./sequalize.js');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.listen(1111, () => console.log(`Example app listening on port 1111`))

// ------------------------------- MAIN ------------------------------------ \\

app.all("/", async function (req, res) {
  console.log("REQUEST(GET): to '/'");

  const [records] = await db.query(
    "SELECT * FROM rules",
    { QueryTypes: QueryTypes.SELECT }
  );

  res.send(records);
});
