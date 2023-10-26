const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://43.202.196.83:8080',
            changeOrigin: true,
        })
    );

    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'http://43.202.196.83:8080',
            ws: true,
        })
    );

};