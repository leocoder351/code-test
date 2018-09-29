const IndexController = {
  indexAction() {
    return (ctx, next) => {
      ctx.body = 'hello world';
    }
  }
};

export default IndexController;