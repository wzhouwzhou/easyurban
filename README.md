<div align="center">
    <br />
    <p>
        <a class="badge-align" href="https://www.codacy.com/app/wzhouwzhou/easyurban?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wzhouwzhou/easyurban&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/06ac1a52dab4445f989486780fa76b7d"/></a>
        <a href="https://www.npmjs.com/package/easyurban"><img src="https://img.shields.io/npm/v/easyurban.svg" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/easyurban"><img src="https://img.shields.io/npm/dt/easyurban.svg" alt="NPM downloads" /></a>
        <a href="https://david-dm.org/wzhouwzhou/easyurban"><img src="https://img.shields.io/david/wzhouwzhou/easyurban.svg" alt="Dependencies" /></a>
        <a href="https://paypal.me/wzhouwzhou"><img src="https://img.shields.io/badge/donate-paypal-009cde.svg" alt="Paypal" /></a>
    </p>
    <p>
        <a href="https://nodei.co/npm/easyurban/"><img src="https://nodei.co/npm/easyurban.png?stars=true&downloads=true"></a>
    </p>
</div>

# Easyurban
## Urban dictionary definitions. Fast and simple.

Get urban dictionary definitions, immediately.

## One Step Installation:

    npm install easyurban

### Why easyurban
• Actually works (😱), without any unnecessary bloat or confusion from using other packages.

• Modern (es6), and lightweight (~4.5 kB packed)

### I'm hooked, how do I begin?

    const UrbanDictionary = require('easyurban');
    const dictionary = new UrbanDictionary;

The `new` keyword is optional, a dictionary can be created simply with UrbanDictionary() as well.

**Lookup terms with dictionary.lookup (await, promise .then()):**

    const result = await dictionary.lookup('Urban dictionary');
    dictionary.lookup('Urban dictionary')
      .then(result => console.log(result.list))
      .catch(console.error)

The result will have a list property, and `result.list` will be an array of (hopefully) a maximum of 10 elements.

**Random:**

    const random = await dictionary.random();

**Error handling:**

Request handling errors (hopefully) contain three properties: error, code, and message

• error contains an Error object with a stack trace error.stack

• code contains the status code of the request

• message contains the body returned by the server. If possible, it will be a parsed JSON.


**Pagination:** If more than 10 definitions exist, fetch a specific page by specifying the second parameter as the page number.

    const secondpage = await dictionary.lookup('Urban dictionary', 2);

Enjoy this package? Consider starring on [github](https://github.com/wzhouwzhou/easyurban) and checking out some of my other work:

[Youtube Search API](https://npmjs.com/ytsearcher)

[Fluent Filepaths](https://npmjs.com/easypathutil)
