module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        'accessor-pairs': 'error',
        // enforces return statements in callbacks of array’s methods
        'array-callback-return': 'error',
        // treat var statements as if they were block scoped
        'block-scoped-var': 'error',
        // enforce that class methods utilize this
        'class-methods-use-this': 'off',
        // specify the maximum cyclomatic complexity allowed in a program
        complexity: 'off',
        // require return statements to either always or never specify values
        'consistent-return': 'off',
        // specify curly brace conventions for all control statements
        curly: ['error', 'all'],
        // require default case in switch statements
        'default-case': 'error',
        // enforce default parameters to be last
        'default-param-last': 'off',
        // enforces consistent newlines before or after dots
        'dot-location': ['error', 'property'],
        // encourages use of dot notation whenever possible
        'dot-notation': ['error', {
            allowKeywords: true,
        }],
        // require the use of === and !==
        eqeqeq: 'error',
        // make sure for-in loops have an if statement
        'guard-for-in': 'error',
        // disallow the use of alert, confirm, and prompt
        'no-alert': 'error',
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',
        // disallow lexical declarations in case/default clauses
        'no-case-declarations': 'off',
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 'error',
        // disallow else after a return in an if
        'no-else-return': 'error',
        // disallow use of labels for anything other then loops and switches
        'no-empty-function': 'off',
        // disallow empty destructuring patterns
        'no-empty-pattern': 'error',
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'error',
        // disallow use of eval()
        'no-eval': 'error',
        // disallow adding to native types
        'no-extend-native': 'error',
        // disallow unnecessary function binding
        'no-extra-bind': 'error',
        // disallow unnecessary Labels
        'no-extra-label': 'error',
        // disallow fallthrough of case statements
        'no-fallthrough': 'error',
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',
        // disallow assignments to native objects or read-only global variables
        'no-global-assign': 'error',
        // disallow the type conversions with shorter notations
        'no-implicit-coercion': 'error',
        // disallow var and named functions in global scope
        'no-implicit-globals': 'error',
        // disallow use of eval()-like methods
        'no-implied-eval': 'error',
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',
        // disallow usage of __iterator__ property
        'no-iterator': 'error',
        // disallow use of labeled statements
        'no-labels': 'error',
        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',
        // disallow creation of functions within loops
        'no-loop-func': 'error',
        // disallow Magic Numbers
        'no-magic-numbers': 'off',
        // disallow use of multiple spaces
        'no-multi-spaces': ['error', {
            exceptions: {
                'VariableDeclarator': true,
            },
        }],
        // disallow use of multiline strings
        'no-multi-str': 'error',
        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'off',
        // disallow use of new operator for Function object
        'no-new-func': 'error',
        // disallows creating new instances of String, Number and Boolean
        'no-new-wrappers': 'error',
        // disallow use of (old style) octal literals
        'no-octal': 'error',
        // disallow use of octal escape sequences in string literals
        'no-octal-escape': 'error',
        // disallow reassignment of function parameters
        'no-param-reassign': 'off',
        // disallow usage of __proto__ property
        'no-proto': 'error',
        // disallow declaring the same variable more then once
        'no-redeclare': 'error',
        // disallow certain properties on certain objects
        'no-restricted-properties': 'off',
        // disallow use of assignment in return statement
        'no-return-assign': 'error',
        // disallow unnecessary return await
        'no-return-await': 'error',
        // disallow use of `javascript:` urls.
        'no-script-url': 'error',
        // disallow self assignment
        'no-self-assign': 'error',
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',
        // disallow use of comma operator
        'no-sequences': 'error',
        // restrict what can be thrown as an exception
        'no-throw-literal': 'error',
        // disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 'error',
        // disallow usage of expressions in statement position
        'no-unused-expressions': 'error',
        // disallow unused labels
        'no-unused-labels': 'error',
        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'error',
        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'error',
        // disallow unnecessary escape usage
        'no-useless-escape': 'error',
        // disallow redundant return statements
        'no-useless-return': 'error',
        // disallow use of void operator
        'no-void': 'error',
        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': 'off',
        // disallow use of the with statement
        'no-with': 'error',
        // require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': ['error', {
            allowEmptyReject: true,
        }],
        // disallow use of the RegExp constructor in favor of regular expression literals
        'prefer-regex-literals': 'off',
        // require use of the second argument for parseInt()
        radix: 'error',
        // disallow async functions which have no await expression
        'require-await': 'off',
        // enforce the use of u flag on RegExp
        'require-unicode-regexp': 'error',
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'error',
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': ['error', 'any'],
        // require or disallow Yoda conditions
        'yoda': 'error',
    },
};
