module.exports = {
    rules: {
        // enforce spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],
        // disallow or enforce spaces inside of single line blocks
        'block-spacing': ['error', 'always'],
        // enforce one true brace style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        // require camel case names
        camelcase: ['error', { properties: 'always' }],
        // enforce spacing before and after comma
        'comma-spacing': ['error', { before: false, after: true }],
        // enforce one true comma style
        'comma-style': ['error', 'last'],
        // disallow padding inside computed properties
        'computed-property-spacing': ['error', 'never'],
        // enforces consistent naming when capturing the current execution context
        'consistent-this': 'off',
        // enforce newline at the end of file, with no multiple empty lines
        'eol-last': 'error',
        // require function expressions to have a name
        'func-names': 'off',
        // enforces use of function declarations or expressions
        'func-style': 'off',
        // blacklist certain identifiers to prevent them being used
        'id-blacklist': 'off',
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': 'off',
        // require identifiers to match the provided regular expression
        'id-match': 'off',
        // this option sets a specific tab width for your code
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1 }],
        // specify whether double or single quotes should be used in JSX attributes
        'jsx-quotes': ['error', 'prefer-double'],
        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // enforce spacing before and after keywords
        'keyword-spacing': 'error',
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style': ['error', 'unix'],
        // enforces empty lines around comments
        'lines-around-comment': 'off',
        // specify the maximum depth that blocks can be nested
        'max-depth': 'off',
        // specify the maximum length of a line in your program
        'max-len': ['error', 120, 4, { ignoreComments: false, ignoreUrls: true }],
        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': 'off',
        // limits the number of parameters that can be used in the function declaration
        'max-params': 'off',
        // specify the maximum number of statement allowed in a function
        'max-statements': 'off',
        // require a capital letter for constructors
        'new-cap': ['error', { newIsCap: true, capIsNew: false }],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        'new-parens': 'error',
        // allow/disallow an empty newline after var statement
        'newline-after-var': 'off',
        // require newline before return statement
        'newline-before-return': 'error',
        // newline per chained method call
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
        // disallow use of the Array constructor
        'no-array-constructor': 'error',
        // disallow use of bitwise operators
        'no-bitwise': 'error',
        // disallow use of the continue statement
        'no-continue': 'off',
        // disallow comments inline after code
        'no-inline-comments': 'off',
        // disallow if as the only statement in an else block
        'no-lonely-if': 'error',
        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'error',
        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        // disallow negated conditions
        'no-negated-condition': 'off',
        // disallow nested ternary expressions
        'no-nested-ternary': 'error',
        // disallow use of the Object constructor
        'no-new-object': 'error',
        // disallow use of unary operators, ++ and --
        'no-plusplus': 'off',
        // disallow use of certain syntax in code
        'no-restricted-syntax': 'off',
        // disallow space between function identifier and application
        'no-spaced-func': 'error',
        // disallow the use of ternary operators
        'no-ternary': 'off',
        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',
        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',
        // disallow the use of Boolean literals in conditional expressions
        'no-unneeded-ternary': 'error',
        // disallow whitespace before properties
        'no-whitespace-before-property': 'error',
        // require padding inside curly braces
        'object-curly-spacing': ['error', 'always'],
        // allow just one var statement per function
        'one-var': ['error', 'never'],
        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': ['error', 'always'],
        // enforce operators to be placed before or after line breaks
        'operator-linebreak': ['error', 'before', { overrides: { '?': 'after' } }],
        // enforce padding within blocks
        'padded-blocks': ['error', 'never'],
        // require quotes around object literal property names
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: false, numbers: true }],
        // specify whether double or single quotes should be used
        quotes: ['error', 'single'],
        // Require JSDoc comment
        'require-jsdoc': 'off',
        // require or disallow use of semicolons instead of ASI
        semi: ['error', 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing': ['error', { before: false, after: true }],
        // sort variables within the same declaration block
        'sort-vars': 'off',
        // require or disallow space before blocks
        'space-before-blocks': ['error', 'always'],
        // require or disallow space before function opening parenthesis
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
        // require or disallow spaces inside parentheses
        'space-in-parens': ['error', 'never'],
        // require spaces around operators
        'space-infix-ops': 'error',
        // Require or disallow spaces before/after unary operators
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': ['error', 'always'],
        // require regex literals to be wrapped in parentheses
        'wrap-regex': 'off'
    }
};
