
var exec = require('cordova/exec');

var PLUGIN_NAME = 'MyCordovaPlugin';

var MyCordovaPlugin = {
  echo: function(phrase, cb) {
    console.log("echo");
  },
  getDate: function() {
    console.log("getDate");
  }
};

module.exports = MyCordovaPlugin;
