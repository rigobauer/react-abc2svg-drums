module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAbc2svgDrums',
      externals: {
        react: 'React'
      }
    }
  }
}
