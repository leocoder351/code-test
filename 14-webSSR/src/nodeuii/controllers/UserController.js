import { route, GET, POST, before } from 'awilix-koa';
@route("/users")
export default class UserController {
  constructor({ userService }) {
    console.log(6666);
    this.userService = userService;
  }

  // 路由 users/123
  @route("/:id")
  @GET()
  async getUser(ctx, next) {
    console.log(7777);
    console.log(ctx.params.id);

    const result = await this.userService.getData(ctx.params.id);
    ctx.body = { data: result };
  }
}