require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Knex = require('knex')
const knexConfig = require('./db/knexfile.js')
const { Model } = require('objection')

const knex = Knex(knexConfig)
Model.knex(knex)

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))

app.use("/api/notes", require("./routes/notes.routes.js"));
app.use("/api/tags", require("./routes/tags.routes.js"));

app.use(function (req, res) {
  if (res.status(404)) {
    res.send({
      error: -2,
      descripción: `ruta ${req.path} método ${req.method} no implementada`,
    });
  }
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(
    `Server listening on ${PORT}`
  );
})
  .on("error", (err) => {
    console.log(err);
  });