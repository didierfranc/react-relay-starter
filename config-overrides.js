module.exports = (config, env) => {
  const babelOptions = config.module.rules.find(conf => {
    return conf.loader && conf.loader.includes('babel-loader')
  }).options
  const babelrc = require(babelOptions.presets[0])
  babelrc.plugins = ['relay',].concat(babelrc.plugins || [])
  babelOptions.presets = babelrc
  return config
}
