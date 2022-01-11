const path = require('path');

module.exports = function override(config, env) {
    config.resolve.alias = {
        ...config.resolve.alias,
        moment: path.resolve('./node_modules/moment'),
        react: path.resolve('./node_modules/react'),
        'styled-components': path.resolve('./node_modules/styled-components'),
    }

    return config;
}