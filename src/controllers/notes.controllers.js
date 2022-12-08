const noteService = require('../services/notes.services');

class NoteController {

  async getById(req, res) {
    try {
      const note = await noteService.getById(req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getByNoteId(req, res) {
    try {
      const note = await noteService.getByNoteId(req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getArchived(_req, res) {
    try {
      const notes = await noteService.getArchived();
      res.json(notes);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async getAll(_req, res) {
    try {
      const notes = await noteService.getAll();
      res.json(notes);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async save(req, res) {
    try {
      if (!req.body.title) throw new Error('Title is required')
      if (!req.body.content) throw new Error('Content is required')
      const note = await noteService.save(req.body);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async deleteById(req, res) {
    try {
      const note = await noteService.deleteById(req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const note = await noteService.update(req.body, req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async archive(req, res) {
    try {
      const found = await noteService.getById(req.params.id);
      const status = found.archived == true ? false : true;
      const note = await noteService.archive(req.params.id, status);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async addTag(req, res) {
    try {
      const note = await noteService.addTag(req.body.id, req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  async removeAllTags(req, res) {
    try {
      const note = await noteService.removeAllTags(req.params.id);
      res.json(note);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new NoteController();