# DeepVision ESLint config
Inspired by AirBnB ESLint config

## Install
ESLint

    npm install eslint --save-dev

Latest version of config

    npm install @deepvision/eslint-config --save-dev

## Usage
### ES2019
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

### React.js
Install React plugin

    npm install eslint-plugin-react --save-dev

Create **.eslintrc.js** file

    module.exports = {
        root: true,
        extends: [
            '@deepvision',
            '@deepvision/eslint-config/plugins/react',
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

### Typescript
Install Typescript plugin

    npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

Create **.eslintrc.js** file

    module.exports = {
        root: true,
        extends: [
            '@deepvision',
            '@deepvision/eslint-config/plugins/typescript',
        ],
        parserOptions: {
            project: './tsconfig.json',
        },
        ...
    }

In **package.json** add new script

    {
        ...
        "scripts": [
            ...
            "lint": "eslint src tests --ext ts"
        ]
        ...
    }

Run lint

    npm run lint
