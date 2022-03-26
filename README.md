# OpenSea API Proxy

Tiny proxy server to hide API key in requests to OpenSea API. 

<br />

This tiny Vercel serverless function acts as a proxy to the Pinboard API allowing requests from all origins.

Deployed at [opensea-api-proxy.vercel.app](https://opensea-api-proxy.vercel.app/).

## Usage

Call `/api/*` just like if it was the OpenSea API.

For example, `/api/v1/assets` will be proxied to `https://api.opensea.io/api/v1/assets`.

## License

Released undet the [MIT](./LICENSE.md) license.

Forked from: [github.com/mmazzarolo/pinboard-api-proxy](https://github.com/mmazzarolo/pinboard-api-proxy)