"use strict";

const Helpers = use("Helpers");

module.exports = {
  default: "local",

  disks: {
    local: {
      root: "public",
      driver: "local"
    }
  }
};
