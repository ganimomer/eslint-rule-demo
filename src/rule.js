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
            CallExpression(node) {
                if (isCallToFilter(node) && isFirstItemAccess(node.parent)) {
                    context.report({node, message})
                }
            }
        }
    }
}