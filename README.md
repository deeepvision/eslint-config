# DeepVision ESLint config
Inspired by AirBnB ESLint config

## Install
ESLint

    npm install eslint --save-dev

Latest version of config

    npm install @deepvision/eslint-config --save-dev

Babel parser (for es6 code only)

    npm install babel-eslint --save-dev

## Usage
Create **.eslintrc.js** file

    module.exports = {
        root: true,
        extends: './node_modules/@deepvision/eslint-config/index.js', // little hack until eslint support configs without "eslint-config-*"
        parser: "babel-eslint", // for es6 code only
        ...
    }

In **package.json** add new script

    {
        ...
        "scripts": [
            ...
            "lint": "eslint ."
        ]
        ...
    }

Run lint

    npm run lint
