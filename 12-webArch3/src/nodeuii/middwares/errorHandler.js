const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        logger.error(err);
        ctx.status = err.status || 500;
        ctx.body = 'error page';
      }
    });

    app.use(async (ctx, next) => {
      await next();
      if (ctx.status != 404) return ;

      ctx.status = 404;
      ctx.body = '<script type="text/javascript" src="http://www.qq.com/404/search_children.js" charset="utf-8" homePageUrl="https://blog.liuxuan.site" homePageName="回到我的主页"></script>';
    });
  }
};

export default errorHandler;