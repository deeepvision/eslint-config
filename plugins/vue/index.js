module.exports = {
    parser: 'vue-eslint-parser',
    plugins: [
        'vue'
    ],
    extends: [
        './rules/base.js',
        './rules/essential.js',
        './rules/strongly-recommended.js',
        './rules/recommended.js',
        './rules/uncategorized.js',
    ],
};
