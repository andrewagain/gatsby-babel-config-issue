module.exports = function(api) {
  console.log("👍 babel.config.js is being used")
  api.cache(true)

  const presets = [
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
  ]

  const plugins = []

  return {
    presets,
    plugins,
  }
}
