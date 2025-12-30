
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
      "chunk-JBGVKXT6.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JBGVKXT6.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/register"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/brands"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/wishlist"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/allorders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/checkout/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AVTV3TXB.js",
      "chunk-66YTQO3W.js",
      "chunk-TRF23T6C.js",
      "chunk-WG7IEJSS.js"
    ],
    "route": "/e-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7253, hash: 'c97d6a0cc3b817a481948c1318d1790b9b80062167987446f7a8bd6c1e0f0090', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4906, hash: 'bf700c5ca1a2acafda3a086023622c454dc14242dda4a866a888cfa58f38a244', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OMAGP45C.css': {size: 135376, hash: '8OAvb5DhDBA', text: () => import('./assets-chunks/styles-OMAGP45C_css.mjs').then(m => m.default)}
  },
};
