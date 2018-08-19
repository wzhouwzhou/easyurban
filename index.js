const rootdir = require('easypathutil')(__dirname);

const Dictionary = rootdir.src.struct.client.UrbanDictionary.$require;

function UrbanDictionary() {
  if (!(this instanceof UrbanDictionary)) return new UrbanDictionary;
  return new Dictionary(rootdir);
}

module.exports = UrbanDictionary.UrbanDictionary = UrbanDictionary.default = UrbanDictionary;
