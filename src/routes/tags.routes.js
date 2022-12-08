const router = require("express").Router();
const tagController = require("../controllers/tags.controllers");

router
  .get("/", tagController.getAll)

  .get("/id/:id", tagController.getById)

  .get("/name/:name", tagController.getByName)

  .post("/", tagController.save)

module.exports = router;