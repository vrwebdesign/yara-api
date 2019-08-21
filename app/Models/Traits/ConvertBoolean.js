'use strict';

class ConvertBoolean {
  register(Model) {
    Model.addHook('afterFind', modelInstance => {
      return this.convertToBoolean(Model, modelInstance);
    });
    Model.addHook('afterFetch', modelInstanceArray => {
      for (let modelInstance of modelInstanceArray) {
        this.convertToBoolean(Model, modelInstance);
      }
      return modelInstanceArray;
    });
    Model.addHook('afterPaginate', modelInstanceArray => {
      for (let modelInstance of modelInstanceArray) {
        this.convertToBoolean(Model, modelInstance);
      }
      return modelInstanceArray;
    });
  }
  convertToBoolean(Model, modelInstance) {
    let boolean_fields = Model.booleanFields;
    if (boolean_fields) {
      for (const field of boolean_fields) {
        modelInstance[field] = modelInstance[field] == 1;
      }
    }
    return modelInstance;
  }
}

module.exports = ConvertBoolean;
