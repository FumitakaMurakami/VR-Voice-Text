const path = require('path')

module.export = {
    entry: {
        index: 'index.js',
        chatgpt: 'chatgpt.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + './public/js/',
    },
}