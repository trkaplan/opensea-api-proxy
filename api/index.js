// Pinboard API proxy. 
// For whatever reason the Pinboard API (https://pinboard.in/howto/#api) doesn't 
// have CORS enabled — so you can't make API calls directly from the browser. 
// This small server proxies requests to the Pinboard API allowing CORS. 

// Create a proxy to redirect requests of the "/api/*" path to the Pinboard API.
// Examples:
// GET /api/v1/posts/all?format=json → https://api.pinboard.in/v1/posts/all?format=json
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: "https://api.opensea.io/api",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "" // Strip "/api" from the URL 
  },
  onProxyReq: (proxyReq, req, res) => {
    // proxying to hide the api key from the client
    proxyReq.setHeader('X-API-KEY', process.env.OPENSEA_API_KEY);
  }
});

// In Vercel, any file inside the "api" directory is mapped to "/api" and
// will be treated as an API endpoint.
// By default, on Vercel this "/api" endpoint would strictly match only "/api" 
// requestes (ignoring sub-paths like "/api/hello"). So, to proxy the entire 
// path, we add a rewrite in "vercel.json" to allow the "api" directory to catch
// all "/api/*" requests.
export default async function (req, res) {
  // Proxy "/api/*" requests to the pinboard API.
  return apiProxy(req, res);
};

