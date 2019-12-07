"use strict";

var controller = require("./controller");

module.exports = function(app) {
  app.route("/hello").get(controller.hello);
  app.route("/greetings/:lang/:name").get(controller.get_greetings);
  app.route("/christmas/:lang/:name").get(controller.get_christmas_greetings);
};
