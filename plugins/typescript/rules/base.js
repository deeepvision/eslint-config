module.exports = {
    rules: {
        // Require that member overloads be consecutive
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        // Requires using either T[] or Array<T> for arrays
        '@typescript-eslint/array-type': ['error', 'generic'],
        // Disallows awaiting a value that is not a Thenable
        '@typescript-eslint/await-thenable': 'error',
        // Bans “// @ts-ignore” comments from being used
        '@typescript-eslint/ban-ts-ignore': 'error',
        // Enforces that types will not to be used
        '@typescript-eslint/ban-types': 'off',
        // Enforce camelCase naming convention
        '@typescript-eslint/camelcase': 'error',
        // Require PascalCased class and interface names
        '@typescript-eslint/class-name-casing': 'error',
        // Consistent with type definition either interface or type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // Require explicit return types on functions and class methods
        '@typescript-eslint/explicit-function-return-type': 'error',
        // Require explicit accessibility modifiers on class properties and methods
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        // Require or disallow spacing between function identifiers and their invocations
        '@typescript-eslint/func-call-spacing': 'error',
        // Enforces naming of generic type variables
        '@typescript-eslint/generic-type-naming': 'off',
        // Enforce consistent indentation
        '@typescript-eslint/indent': ['error', 4],
        // Require that interface names be prefixed with I
        '@typescript-eslint/interface-name-prefix': 'off',
        // Require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-delimiter-style': 'error',
        // Enforces naming conventions for class members by visibility
        '@typescript-eslint/member-naming': 'off',
        // Require a consistent member declaration order
        '@typescript-eslint/member-ordering': 'off',
        // Enforces the use of as Type assertions instead of <Type> assertions
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        // Disallow generic Array constructors
        '@typescript-eslint/no-array-constructor': 'error',
        // Disallow empty functions
        '@typescript-eslint/no-empty-function': 'error',
        // Disallow the declaration of empty interfaces
        '@typescript-eslint/no-empty-interface': 'error',
        // Disallow usage of the any type
        '@typescript-eslint/no-explicit-any': 'error',
        // Disallow unnecessary parentheses
        '@typescript-eslint/no-extra-parens': 'error',
        // Forbids the use of classes as namespaces
        '@typescript-eslint/no-extraneous-class': 'error',
        // Requires Promise-like values to be handled appropriately.
        '@typescript-eslint/no-floating-promises': 'error',
        // Disallow iterating over an array with a for-in loop
        '@typescript-eslint/no-for-in-array': 'error',
        // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
        '@typescript-eslint/no-inferrable-types': 'error',
        // Disallows magic numbers
        '@typescript-eslint/no-magic-numbers': 'off',
        // Enforce valid definition of new and constructor
        '@typescript-eslint/no-misused-new': 'error',
        // Disallow the use of custom TypeScript modules and namespaces
        '@typescript-eslint/no-namespace': 'error',
        // Disallows non-null assertions using the ! postfix operator
        '@typescript-eslint/no-non-null-assertion': 'error',
        // Forbids an object literal to appear in a type assertion expression
        '@typescript-eslint/no-object-literal-type-assertion': 'error',
        // Disallow the use of parameter properties in class constructors
        '@typescript-eslint/no-parameter-properties': 'error',
        // Disallows invocation of require()
        '@typescript-eslint/no-require-imports': 'error',
        // Disallow aliasing this
        '@typescript-eslint/no-this-alias': 'error',
        // Disallow the use of type aliases
        '@typescript-eslint/no-type-alias': 'error',
        // Warns when a namespace qualifier is unnecessary
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // Warns if a type assertion does not change the type of an expression
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        // Disallow unused variables
        '@typescript-eslint/no-unused-vars': 'error',
        // Disallow the use of variables before they are defined
        '@typescript-eslint/no-use-before-define': 'error',
        // Disallow unnecessary constructors
        '@typescript-eslint/no-useless-constructor': 'error',
        // Disallows the use of require statements except in import statements
        '@typescript-eslint/no-var-requires': 'error',
        // Prefer a ‘for-of’ loop over a standard ‘for’ loop
        // if the index is only used to access the array being iterated
        '@typescript-eslint/prefer-for-of': 'error',
        // Use function types instead of interfaces with call signatures
        '@typescript-eslint/prefer-function-type': 'error',
        // Enforce includes method over indexOf method
        '@typescript-eslint/prefer-includes': 'error',
        // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // Requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly': 'error',
        // Prefer RegExp#exec() over String#match() if no global flag is provided
        '@typescript-eslint/prefer-regexp-exec': 'error',
        // Enforce the use of String#startsWith and String#endsWith
        // instead of other equivalent methods of checking substrings
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // Requires any function or method that returns a Promise to be marked async
        '@typescript-eslint/promise-function-async': 'error',
        // Enforce giving compare argument to Array#sort
        '@typescript-eslint/require-array-sort-compare': 'error',
        // When adding two variables, operands must both be of type number or of type string
        '@typescript-eslint/restrict-plus-operands': 'error',
        // Require or disallow semicolons instead of ASI
        '@typescript-eslint/semi': 'error',
        // Restricts the types allowed in boolean expressions
        '@typescript-eslint/strict-boolean-expressions': 'error',
        // Sets preference level for triple slash directives versus ES6-style import declarations
        '@typescript-eslint/triple-slash-reference': 'error',
        // Require consistent spacing around type annotations
        '@typescript-eslint/type-annotation-spacing': 'error',
        // Enforces unbound methods are called with their expected scope
        '@typescript-eslint/unbound-method': 'error',
        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        '@typescript-eslint/unified-signatures': 'error',
    },
};
