const path = require("path")

module.exports = {
  mode:  "development",
  entry : "./src/index.js",
  output : {
    filename: "webpack-output.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'img-loader'
        ]
    }
   ]
  }
}
