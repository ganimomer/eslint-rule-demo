'use strict'

const message = 'Prefer using `find` over `filter`'

const isCallToFilter = node => node.callee.type === 'MemberExpression' && 
    node.callee.property.type === 'Identifier' &&
    node.callee.property.name === 'filter'

const isFirstItemAccess = node => node.type === 'MemberExpression' && 
    node.property.type === 'Literal' && 
    node.property.value === 0

module.exports = {
    create(context) {
        return {
            'MemberExpression[property.value=0] > CallExpression[callee.property.name="filter"]'(node) {
                    context.report({node, message})
            }
        }
    }
}