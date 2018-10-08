const path = require('path');
const vueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
  entry: [path.resolve(__dirname, '../src/webapp/entry-client.js')],
  plugins: [
    new vueSSRClientPlugin()
  ]
}