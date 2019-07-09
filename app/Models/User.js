'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('BaseModel');

class User extends Model {
  static get allowField() {
    return [
      'email',
      'mobile',
      'mobile',
      'FullName',
      'birthDateYear',
      'jender',
      'role'
    ];
  }
}

module.exports = User;
