module.exports = {
    rules: {
        'vue/attributes-order': ['error', {
            'order': [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
            ],
            'alphabetical': false,
        }],
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'error',
        'vue/this-in-template': 'error',
    },
};
