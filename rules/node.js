module.exports = {
    env: {
        'node': true
    },
    rules: {
        // enforce return after a callback
        'callback-return': [2, ['callback', 'cb', 'next']],
        // enforce require() on top-level module scope
        'global-require': 2,
        // enforces error handling in callbacks (node environment)
        'handle-callback-err': [2, 'error'],
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': 2,
        // disallow use of new operator with the require function
        'no-new-require': 2,
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 2,
        // disallow process.exit()
        'no-process-exit': 0,
        // restrict usage of specified node modules
        'no-restricted-modules': 0,
        // disallow use of synchronous methods (off by default)
        'no-sync': 2
    }
};
