const path = require('path')
const NeDB = require('nedb')

module.exports = function (app) {
  const dbPath = app.get('nedb')
  const Model = new NeDB({
    filename: path.join(dbPath, 'users.db'),
    autoload: true
  })

  Model.ensureIndex({ fieldName: 'email', unique: true })

  return Model
}
