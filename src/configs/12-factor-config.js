'use strict';

const factorConfig = require('12factor-config');

const factorConfigObj = factorConfig({
    allowedHeaders: {
        env: 'ALLOWED_HEADERS',
        type: 'string',
        default: '',
    },
    allowedOrigins: {
        env: 'ALLOWED_ORIGINS',
        type: 'string',
        default: '*',
    },
    appName: {
        env: 'APP_NAME',
        type: 'string',
        required: true,
        default: 'App',
    },
    debug: {
        env: 'DEBUG',
        type: 'string',
        required: true,
        default: '',
    },
    desiredPort: {
        env: 'PORT',
        type: 'integer',
        required: true,
        default: 5153,
    },
    enableCORS: {
        env: 'ENABLE_CORS',
        type: 'boolean',
        default: true,
    },
    nodeEnv: {
        env: 'NODE_ENV',
        type: 'enum',
        values: ['development', 'production',],
        default: 'production',
    },
});

module.exports = factorConfigObj;
