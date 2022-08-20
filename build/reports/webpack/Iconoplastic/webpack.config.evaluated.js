{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/js/packages/Iconoplastic/kotlin/Iconoplastic.js'
    ]
  },
  output: {
    path: '/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/distributions',
    filename: [Function: filename],
    library: 'Iconoplastic',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/home/renattele/StudioProjects/NoBackup/Iconoplastic/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}