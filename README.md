# DeepVision ESLint config
Inspired by AirBnB ESLint config

## Install
ESLint

    npm install eslint --save-dev
    
Latest version of config

    npm install @bit/deep.configs._.eslint --save-dev

Babel parser (for es6 code only)

    npm install babel-eslint --save-dev

## Usage
Create **.eslintrc.js** file

    module.exports = {
        extends: "hope",
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
    