let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/js/packages/Iconoplastic/kotlin/Iconoplastic.js"]
};

config.output = {
    path: "/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "Iconoplastic.js"
            : "Iconoplastic-[name].js";
    },
    library: "Iconoplastic",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/reports/webpack/Iconoplastic/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
