'use strict';
const Resource = use('Resource');
class UserController extends Resource {
  constructor() {
    super();
    this.Model = use('App/Models/User');
  }
  async store({ request, response }) {
    let item = request.only(this.Model.allowField);
    if (!item.email && !item.mobile) {
      return response
        .status(400)
        .json({ message: 'پر کردن ایمیل یا موبایل الزامی می باشد' });
    }
    return super.store({ request, response });
  }
}

module.exports = UserController;
