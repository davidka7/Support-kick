const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/url',
        createProxyMiddleware({
          target: 'http://localhost:3001',
          changeOrigin: true,
        })
      );
};