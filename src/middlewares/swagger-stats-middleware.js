'use strict';

const swStats = require('swagger-stats');

module.exports = function swaggerStatsFactory() {
    return swStats.getMiddleware({ uriPath: '/api-stats', elasticsearch: 'http://127.0.0.1:9200', });
};
