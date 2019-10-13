const test = require('ava');
const buzz = require("./index.js");

test('buzz', t => {
    t.is(buzz, "buzz");
});
