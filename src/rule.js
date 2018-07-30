'use strict'

module.exports = {
    meta: {
        schema: [{type: 'integer'}]
    },
    create(context) {
        const [maxDepth = 3] = context.options
        let depth = 0
        let shouldReport = false
        return {
            MemberExpression(node) {
                depth++
                if (depth>= maxDepth) {
                    shouldReport = true;
                    
                }
            },
            'MemberExpression:exit'(node) {
                depth--;
                if (depth === 0 && shouldReport) {
                    context.report(node, `Member chain exceeds ${maxDepth} items`)
                    shouldReport = false
                }
            }
        }
    }
}