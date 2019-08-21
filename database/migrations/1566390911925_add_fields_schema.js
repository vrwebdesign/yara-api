'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddFieldsSchema extends Schema {
  up() {
    this.table('users', table => {
      table
        .enum('role', ['patient', 'doctor', 'subscribeToNewsLetter'])
        .alter();
      table
        .boolean('subscribeToNewsLetter')
        .defaultTo(true)
        .after('role');
      // alter table
    });
  }

  down() {
    this.table('users', table => {
      // reverse alternations
    });
  }
}

module.exports = AddFieldsSchema;
