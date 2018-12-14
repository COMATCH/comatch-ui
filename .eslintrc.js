const path = require('path');
const pkg = require('./package.json');

// Dynamically determine React version based on package.json
const reactVersion = () => {
    if (pkg.dependencies && pkg.dependencies.react) {
        return { version: pkg.dependencies.react.replace(/[^0-9.]/g, '') };
    }
    if (pkg.devDependencies && pkg.devDependencies.react) {
        return { version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') };
    }
};

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    env: {
        jest: true,
    },
    extends: ['airbnb/base', 'plugin:react/recommended', 'prettier'],
    rules: {
        'valid-jsdoc': ['error'],
        'class-methods-use-this': 0,
        'import/prefer-default-export': 'off',
        'import/extensions': ['off', 'never'],
        'import/no-absolute-path': 0,
        'import/no-extraneous-dependencies': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        'object-shorthand': ['error', 'always', { avoidQuotes: false }],
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_id'],
            },
        ],
        'max-len': [
            2,
            {
                code: 120,
                ignorePattern: '^import\\W.*',
            },
        ],
        'func-names': 0,
        'new-cap': [
            2,
            {
                capIsNewExceptions: [
                    'List',
                    'Map',
                    'OrderedMap',
                    'OrderedSet',
                    'Range',
                    'Record',
                    'Repeat',
                    'Seq',
                    'Set',
                    'Stack',
                ],
            },
        ],
        'no-use-before-define': 0,
        'no-console': 'error',
        'no-plusplus': 0,
        curly: ['error', 'all'],
    },
    globals: {
        document: true,
    },
    settings: {
        react: {
            ...reactVersion(),
        },
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')],
            },
        },
    },
    plugins: ['jest'],
};
