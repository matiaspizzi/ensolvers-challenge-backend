const Tag = require('../db/models/tag.models')

class TagController {

  async getAll() {
    return await Tag.query()
      .withGraphFetched('notes')
  }
  
  async getById(id) {
    return await Tag.query()
      .findById(id)
      .withGraphFetched('notes')
  }

  async getByName(name) {
    return await Tag.query()
      .where('name', name) 
      .withGraphFetched('notes')
  }

  async save(obj) {
    const found = await this.getByName(obj.name)
    if (found[0]) { return found[0] }
    return await Tag.query().insert(obj)
  }
}

module.exports = new TagController()