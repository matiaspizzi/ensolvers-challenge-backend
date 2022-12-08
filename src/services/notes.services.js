const noteDAO = require('../dao/notes.dao');

class NoteService {
  async getAll() {
    return await noteDAO.getAll();
  }

  async getArchived() {
    return await noteDAO.getArchived();
  }

  async getById(id) {
    return await noteDAO.getById(id);
  }

  async getByTagId(id) {
    return await noteDAO.getByTagId(id);
  }

  async save(obj) {
    return await noteDAO.save(obj);
  }

  async update(obj, id) {
    return await noteDAO.update(obj, id);
  }

  async archive(id, status) {
    return await noteDAO.archive(id, status);
  }

  async deleteById(id) {
    return await noteDAO.deleteById(id);
  }

  async addTag(tagId, noteId) {
    return await noteDAO.addTag(tagId, noteId);
  }

  async removeAllTags(noteId) {
    return await noteDAO.removeAllTags(noteId);
  }
}

module.exports = new NoteService();