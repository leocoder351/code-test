import { createApp } from './main.js';

// 核心的目的：
// 1. 摘取每一当前路由 index/test => vue router => components
// 2. components 异步的数据 组装成一个页面 
// 3. 把后端请求的这套流程数据还给 context.state
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    // 后台真实的路由 a/b
    // router 是前端的路由
    // context.url 是访问后端的路由
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      Promise.all(matchedComponents.map((component) => {
        if (component.asyncData) {
          return component.asyncData({
            store
          })
        }
      })).then(() => {
        // 读取完
        context.state = store.state;
        resolve(app);
      }).catch((err) => {
        console.log('err', err);
      });
    }, (err) => {
      console.log('err', err);
    });
  });
}