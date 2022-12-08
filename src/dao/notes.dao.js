const Note = require('../db/models/note.models')

class NoteController {

  async getAll() {
    return await Note.query().withGraphFetched('tags')
  }

  async getArchived() {
    return await Note.query().where({ archived: true })
  }

  async getById(id) {
    return await Note.query()
      .findById(id)
      .withGraphFetched('tags')
  }

  async getByTagId(id) {
    return await Note.query()
      .whereExists(Note.relatedQuery('tags').where('tags.id', id))
      .withGraphFetched('tags')
  }

  async save(obj) {
    const res = await Note.query().insert(obj)
    return { ...res, updated_at: new Date() }
  }

  async update(obj, id) {
    const res = await Note.query().patchAndFetchById(id, obj)
    return { ...res, updated_at: new Date() }
  }

  async archive(id, status) {
    return await Note.query().patchAndFetchById(id, { archived: status })
  }

  async deleteById(id) {
    await this.removeAllTags(id)
    return await Note.query().deleteById(id)
  }

  async addTag(tagId, noteId) {
    const note = await this.getById(noteId)
    if (note.tags.find(tag => tag.id == tagId)) { return note }
    return await Note.relatedQuery('tags').for(noteId).relate(tagId)
  }

  async removeAllTags(noteId) {
    return await Note.relatedQuery('tags').for(noteId).unrelate()
  }
}

module.exports = new NoteController()