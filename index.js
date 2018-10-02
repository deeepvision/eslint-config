module.exports = {
    extends: [
        './rules/errors.js',
        './rules/best-practices.js',
        './rules/strict.js',
        './rules/variables.js',
        './rules/node.js',
        './rules/style.js',
        './rules/es6.js',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    globals: {
        // Jest functions
        expect: true,
        describe: true,
        test: true,
    },
    rules: {},
};
