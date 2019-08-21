'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('BaseModel');

class User extends Model {
  static boot() {
    super.boot();

    this.addTrait('ConvertBoolean');
  }

  static get allowField() {
    return [
      'email',
      'mobile',
      'mobile',
      'fullName',
      'birthDateYear',
      'gender',
      'role',
      'subscribeToNewsLetter'
    ];
  }
  static get booleanFields() {
    return ['subscribeToNewsLetter'];
  }
}

module.exports = User;
