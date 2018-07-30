'use strict';
const {RuleTester} = require('eslint')
const rule = require('../src/rule')
const ruleTester = new RuleTester();

ruleTester.run('no-trainwreck', rule, {
    valid: [
        'a.b.c',
        {
            code: 'a.b.c.d',
            options: [4]
        }
    ],
    invalid: [{
       code: 'a.b.c.d',
       errors: [{
           message: 'Member chain exceeds 3 items'
       }]
    }, {
        code: 'a.b.c.d.e',
        errors: [{
            message: 'Member chain exceeds 3 items'
        }]
    }, {
        code: 'a.b.c.d.e',
        options: [4],
        errors: [{
            message: 'Member chain exceeds 4 items'
        }]
    }]
})