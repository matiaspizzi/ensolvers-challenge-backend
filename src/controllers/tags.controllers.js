const tagService = require('../services/tags.services');

class TagController {

  async getById(req, res) {
    try {
      const tag = await tagService.getById(req.params.id);
      res.json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getByName(req, res) {
    try {
      const tag = await tagService.getByName(req.params.name);
      res.json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getAll(_req, res) {
    try {
      const tags = await tagService.getAll();
      res.json(tags);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async save(req, res) {
    try {
      const tag = await tagService.save(req.body);
      res.json(tag);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new TagController();