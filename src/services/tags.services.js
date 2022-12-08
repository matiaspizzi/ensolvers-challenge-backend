const tagDAO = require('../dao/tags.dao');

class TagService {
  async getAll() {
    return await tagDAO.getAll();
  }

  async getById(id) {
    return await tagDAO.getById(id);
  }

  async save(obj) {
    return await tagDAO.save(obj);
  }
}

module.exports = new TagService();