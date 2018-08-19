'use strict';
Reflect.defineProperty(exports, '__esModule', { value: true });

const { get } = require('https');
const { escape } = require('querystring');

const Requester = class Requester {
  constructor(rootdir, auth) {
    const { NetConstants: {
      base_path,
      default_options,
      random_path,
      random_symb,
    } } = rootdir.src.deps.$require;
    this.base_path = base_path;
    this.options = default_options;
    this.random_path = random_path;
    this.random_symb = random_symb;
  }

  buffer(query, page = 1, headers = {}) {
    const options = Object.assign({}, this.options);
    options.path = query === this.random_symb ? this.random_path : `${this.base_path}${escape(query)}&page=${page}`;
    console.log(options.path)
    options.headers = Object.assign({}, options.headers, headers);
    return new Promise((res, rej) => {
      const req = this.lastrequest = get(options, response => {
        const { statusCode } = response;
        let error = null;
        if (statusCode !== 200) {
          error = { details: new Error(`Status Code: ${statusCode}`), code: statusCode };
          response.resume();
        }
        let chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        return response.on('end', () => {
          const buf = Buffer.concat(chunks);
          let message = buf.toString('utf-8');
          try {
            message = JSON.parse(message);
          } finally {
            if (error) {
              return rej({
                error: error.details,
                code: error.code,
                message,
              });
            }
            return res(buf);
          }
        });
      });
      return req.end();
    });
  }
  text(query, page = 1, headers = {}) {
    return this.buffer(query, page, headers).then(r => r.toString());
  }
  async json(query, page = 1, headers = {}) {
    return JSON.parse(await this.text(query, page, headers));
  }
};
Requester.Requester = Requester.default = Requester;
exports.default = Requester;
