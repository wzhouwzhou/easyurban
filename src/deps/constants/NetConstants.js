exports.default_options = {
  hostname: 'api.urbandictionary.com',
  port: 443,
  headers: { 'Cache-Control': 'no-cache' },
};

exports.base_path = '/v0/define?term=';
exports.random_path = '/v0/random';
exports.random_symb = Symbol('$random');
