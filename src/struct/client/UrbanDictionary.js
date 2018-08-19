'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

const Requester = require('../net/Requester').default;

const UrbanDictionary = class UrbanDictionary {
  constructor(rootdir) {
    this.requester = new Requester(rootdir);
  }

  lookup(query, page) {
    return this.requester.json(query, page);
  }

  random() {
    return this.lookup(this.requester.random_symb);
  }
};

exports.default = UrbanDictionary;
