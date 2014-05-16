'use strict';

var state = require('./state');
var router = require('./router');
var activator = require('./activator');

function mount (container, routes) {
  var data = container.dataset.taunus;
  if (!data) {
    throw new Error('taunus: expected data-taunus attribute missing');
  }
  var model = JSON.parse(data);

  state.container = container;

  router.setup(routes);
  activator.start(model);
}

module.exports = mount;
