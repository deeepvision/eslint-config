module.exports = {
    rules: {
        // enforce or disallow variable initializations at definition
        'init-declarations': 'off',
        // disallow deletion of variables
        'no-delete-var': 'error',
        // disallow labels that share a name with a variable
        'no-label-var': 'error',
        // disallow specific global variables
        'no-restricted-globals': 'off',
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 'off',
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 'error',
        // disallow use of undefined when initializing variables
        'no-undef-init': 'error',
        // disallow use of undefined variable
        'no-undefined': 'error',
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', {
            vars: 'local',
            args: 'after-used',
        }],
        // disallow use of variables before they are defined
        'no-use-before-define': 'error',
    },
};
