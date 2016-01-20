# Hope.UA ESLint config 
Inspired by AirBnB ESLint config

## Install
ESLint

    npm install eslint --save-dev
    
Latest version of config

    npm install eslint-config-hope --save-dev
    
React plugin

    npm install eslint-plugin-react --save-dev
    
Babel parser (for es6 code only)

    npm install babel-eslint

## Usage
Create **.eslintrc** file

    {
        "extends": "hope",
        "parser": "babel-eslint", // for es6 code only
        "plugins": ["react"], // for React rules
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
    