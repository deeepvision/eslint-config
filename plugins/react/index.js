module.exports = {
    plugins: [
        'react',
    ],
    extends: [
        './rules/react.js',
        './rules/jsx.js',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
