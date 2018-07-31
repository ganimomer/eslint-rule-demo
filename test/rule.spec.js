'use strict';
const {RuleTester} = require('eslint')
const rule = require('../src/rule')
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018
    }
});

ruleTester.run('prefer-find', rule, {
    valid: [{
        code: 'arr.find(x => x % 2)'
    }],
    invalid: [{
       code: 'arr.filter(x => x % 2)[0]',
       errors: [{
           message: 'Prefer using `find` over `filter`'
       }]
    }]
})