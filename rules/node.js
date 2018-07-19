module.exports = {
    env: {
        node: true,
    },
    rules: {
        // enforce return after a callback
        'callback-return': 'off',
        // enforce require() on top-level module scope
        'global-require': 'off',
        // enforces error handling in callbacks (node environment)
        'handle-callback-err': ['error', 'error'],
        // disallow use of the Buffer() constructor
        'no-buffer-constructor': 'error',
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': 'error',
        // disallow use of new operator with the require function
        'no-new-require': 'error',
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 'error',
        // disallow use of process.env
        'no-process-env': 'off',
        // disallow process.exit()
        'no-process-exit': 'off',
        // disallow specified modules when loaded by require
        'no-restricted-modules': 'off',
        // disallow use of synchronous methods (off by default)
        'no-sync': 'error',
    },
};
