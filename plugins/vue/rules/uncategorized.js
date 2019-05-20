module.exports = {
    rules: {
        // enforce consistent spacing inside array brackets
        'vue/array-bracket-spacing': ['error', 'never'],
        // enforce consistent spacing before and after the arrow in arrow functions
        'vue/arrow-spacing': 'error',
        // disallow or enforce spaces inside of blocks after opening block and before closing block
        'vue/block-spacing': ['error', 'always'],
        // enforce consistent brace style for blocks
        'vue/brace-style': ['error', '1tbs', {
            allowSingleLine: true,
        }],
        // enforce camelcase naming convention
        'vue/camelcase': ['error', {
            properties: 'always',
        }],
        // require or disallow trailing commas
        'vue/comma-dangle': 'error',
        // enforce specific casing for the component naming style in template
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        // require the use of === and !==
        'vue/eqeqeq': 'error',
        // enforce consistent spacing between keys and values in object literal properties
        'vue/key-spacing': 'error',
        // require component name property to match its file name
        'vue/match-component-file-name': 'error',
        // disallow boolean defaults
        'vue/no-boolean-default': 'error',
        // disallow specified syntax
        'vue/no-restricted-syntax': 'error',
        // enforce consistent spacing inside braces
        'vue/object-curly-spacing': 'error',
        // require the component to be directly exported
        'vue/require-direct-export': 'error',
        // enforce consistent indentation in <script>
        'vue/script-indent': 'off',
        // require spacing around infix operators
        'vue/space-infix-ops': 'error',
        // enforce consistent spacing before or after unary operators
        'vue/space-unary-ops': 'error',
        // enforce or forbid parentheses after method calls without arguments in v-on directives
        'vue/v-on-function-call': 'error',
    },
};
