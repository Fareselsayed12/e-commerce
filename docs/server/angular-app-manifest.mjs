
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/e-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/e-commerce/home",
    "route": "/e-commerce"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-APELCSOE.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-APELCSOE.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/brands"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/wishlist"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/allorders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/checkout/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4RPCVF7.js",
      "chunk-E3CUEQG4.js",
      "chunk-K5LW5PCA.js",
      "chunk-KVNHI3TP.js"
    ],
    "route": "/e-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7253, hash: '4e21ef2ce20ec634c3eedf35d53a3394aafeec7b3893cb6311d15a95e45d241d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4906, hash: '701ad3cf94b60187754c06d91aef2087c00f707018ca975e4888cd13820353ae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OMAGP45C.css': {size: 135376, hash: '8OAvb5DhDBA', text: () => import('./assets-chunks/styles-OMAGP45C_css.mjs').then(m => m.default)}
  },
};
