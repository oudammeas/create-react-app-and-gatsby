const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Oudam Meas\\Learnings\\create-react-app-and-gatsby\\src\\pages\\index.js")))
}

