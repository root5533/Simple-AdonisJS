'use strict'

const Schema = use('Schema')

class JobsSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.string('link')
      table.string('description')
      table.string('user_id')
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = JobsSchema
