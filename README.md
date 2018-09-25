# DeepVision ESLint config
Inspired by AirBnB ESLint config

## Install
ESLint

    npm install eslint --save-dev

Latest version of config

    npm install @deepvision/eslint-config --save-dev

## Usage
### ES2018
Install Babel parser

    npm install babel-eslint --save-dev

Create **.eslintrc.js** file

    module.exports = {
        root: true,
        parser: 'babel-eslint',
        extends: [
            '@deepvision',
        ],
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

### Vue.js
Install Vue parser

    npm install vue-eslint-parser --save-dev

Create **.eslintrc.js** file

    module.exports = {
        root: true,
        extends: [
            '@deepvision',
            '@deepvision/eslint-config/plugins/vue',
        ],
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
