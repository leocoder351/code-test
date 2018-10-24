const pluginName = 'HtmlAfterWebpackPlugin';

class HtmlAfterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      console.log('自定义weboack插件');
      
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName, htmlPluginData => {
        const result = htmlPluginData.assets.js;
        let _html = htmlPluginData.html;
        console.log('htmlPluginData', htmlPluginData);
        console.log('result', result);
        console.log('html', _html);

        _html = _html.replace('<!--injectjs-->', `<script src="/${result}"></script>`);
        htmlPluginData.html = _html;
      });
    })
  }
}

module.exports = HtmlAfterWebpackPlugin