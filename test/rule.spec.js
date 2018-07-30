'use strict';
const {RuleTester} = require('eslint')
const rule = require('../src/rule')
const ruleTester = new RuleTester();

ruleTester.run('rule', rule, {
    valid: ['foo'],
    invalid: [{
       code: 'bar',
       errors: [{
           message: 'baz'
       }]
    }]
})