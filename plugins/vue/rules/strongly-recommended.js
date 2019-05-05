module.exports = {
    rules: {
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-end-tags': 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'error',
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'vue/multiline-html-element-content-newline': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/name-property-casing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
    },
};
