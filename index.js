module.exports = {
    extends: [
        'hope/rules/errors',
        'hope/rules/best-practices',
        'hope/rules/strict',
        'hope/rules/variables',
        'hope/rules/node',
        'hope/rules/style',
        'hope/rules/es6',
        'hope/rules/react'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {}
};
