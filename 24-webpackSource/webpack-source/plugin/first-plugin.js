/**
1. 插件一定要有apply
2. 插件里面compiler
3. compiler -> 留钩子 -> 给外界留下可以注册的接口
4. webpack在该执行的时候定位的插件的时机给执行了
*/

const pluginName = 'FirstPlugin';

class FirstPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack第一个插件');
    });
  }
}

module.exports = FirstPlugin;



