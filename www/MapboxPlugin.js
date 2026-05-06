var exec = require('cordova/exec');

var SERVICE = 'MapboxPlugin';

function call(action, args) {
  return new Promise(function (resolve, reject) {
    exec(resolve, reject, SERVICE, action, args || []);
  });
}

module.exports = {
  initialize: function (options) {
    return call('initialize', [options || {}]);
  },

  setCamera: function (options) {
    return call('setCamera', [options || {}]);
  },

  setViewport: function (options) {
    return call('setViewport', [options || {}]);
  },

  addMarker: function (options) {
    return call('addMarker', [options || {}]);
  },

  removeMarker: function (id) {
    return call('removeMarker', [{ id: id }]);
  },

  clearMarkers: function () {
    return call('clearMarkers', []);
  },

  getCamera: function () {
    return call('getCamera', []);
  },

  close: function () {
    return call('close', []);
  }
};
