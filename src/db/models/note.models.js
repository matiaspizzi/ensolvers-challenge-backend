const { Model } = require('objection');

class Note extends Model {
  static get tableName() {
    return 'notes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'content'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 100 },
        content: { type: 'string', minLength: 1, maxLength: 300 },
        archived: { type: 'boolean' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    const Tag = require('./tag.models.js');

    return {
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'notes.id',
          through: {
            from: 'note_tags.note_id',
            to: 'note_tags.tag_id'
          },
          to: 'tags.id'
        }
      }
    }
  }
}

module.exports = Note;