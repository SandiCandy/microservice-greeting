"use strict";

var properties = require("../package.json");

var controllers = {
  hello: function(req, res) {
    res.json({ text: "Hello World" });
  },
  get_greetings: function(req, res) {
    switch (req.params.lang) {
      case "en":
        res.send("Hello " + req.params.name + "!");
        break;
      case "de":
        res.send("Hallo " + req.params.name + "!");
        break;
      case "nl":
        res.send("Hoi " + req.params.name + "!");
        break;
      case "fr":
        res.send("Bonjour " + req.params.name + "!");
        break;
      default:
        res.send("Hello " + req.params.name + "!");
    }
  },
  get_christmas_greetings: function(req, res) {
    switch (req.params.lang) {
      case "en":
        res.send("Merry Christmas " + req.params.name + "!");
        break;
      case "de":
        res.send("Frohe Weihnachten " + req.params.name + "!");
        break;
      case "nl":
        res.send("Vrolijk kerstfeest " + req.params.name + "!");
        break;
      case "fr":
        res.send("Joyeux noël " + req.params.name + "!");
        break;
      default:
        res.send("Merry Christmas " + req.params.name + "!");
    }
  }
};

module.exports = controllers;
