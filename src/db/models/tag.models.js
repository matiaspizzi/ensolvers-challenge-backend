const { Model } = require('objection');

class Tag extends Model {
  static get tableName() {
    return 'tags';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 20 }
      }
    };
  }

  static get relationMappings() {
    const Note = require('./note.models.js');

    return {
      notes: {
        relation: Model.ManyToManyRelation,
        modelClass: Note,
        join: {
          from: 'tags.id',
          through: {
            from: 'note_tags.tag_id',
            to: 'note_tags.note_id'
          },
          to: 'notes.id'
        }
      }
    }
  }
}

module.exports = Tag;