const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/coursetable', {
            target: 'http://159.75.69.199:8088/api/',
            changeOrigin: true,
        })
    );
};
