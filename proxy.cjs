const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS on your proxy server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Proxy requests to the target server
app.use('/', createProxyMiddleware({ target: 'https://webhook.site', changeOrigin: true }));

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
