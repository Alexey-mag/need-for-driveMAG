module.exports = {
    extends: [
        'plugin:vue/recommended',
        'prettier'
    ],
    rules: {
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module',
        allowImportExportEverywhere: true
    }
}
