module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        './rules/base.js',
        './rules/core-disable.js',
    ],
};
