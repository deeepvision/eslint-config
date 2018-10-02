module.exports = {
    rules: {
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-end-tags': 'error',
        'vue/html-indent': 'error',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: 2, // may be 3? =)
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/mustache-interpolation-spacing': 'error',
        'vue/name-property-casing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-template-shadow': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
    },
};
