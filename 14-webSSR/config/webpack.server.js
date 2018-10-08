const path = require('path');
const vueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  target: 'node',
  entry: [path.resolve(__dirname, '../src/webapp/entry-server.js')],
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new vueSSRServerPlugin()
  ]
}