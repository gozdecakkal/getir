'use strict';

module.exports = [
    /* eslint-disable global-require */
    require('./body-parser-json-middleware'),
    require('./body-parser-url-encode-middleware'),
    require('./compression-middleware'),
    require('./helmet-middleware'),
    require('./swagger-middleware'),
    require('./cors-middleware'),
    require('./swagger-stats-middleware'),

    // Routes should immediately precede Error Handlers
    require('./routes-middleware'),
    require('./unmatched-route-handler-middleware'),
];
