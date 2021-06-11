
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/lauralee/code/hec/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lauralee/code/hec/src/pages/index.js")),
  "component---src-pages-test-js": preferDefault(require("/Users/lauralee/code/hec/src/pages/test.js"))
}

