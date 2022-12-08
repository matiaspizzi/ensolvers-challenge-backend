const router = require("express").Router();
const noteController = require("../controllers/notes.controllers");

router
  .get("/archived", noteController.getArchived)

  .get("/", noteController.getAll)

  .get("/:id", noteController.getById)

  .post("/", noteController.save)

  .put("/:id", noteController.update)

  .put("/:id/archive", noteController.archive)

  .delete("/:id", noteController.deleteById)

  .post("/:id/addtag", noteController.addTag)

  .delete("/:id/removetags", noteController.removeAllTags);

module.exports = router;