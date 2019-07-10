'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('email');
      table.string('mobile');
      table.string('fullName');
      table.integer('birthDateYear');
      table.enum('gender', ['male', 'female']);
      table.enum('role', ['patient', 'doctor']);
      table.boolean('is_deleted').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
