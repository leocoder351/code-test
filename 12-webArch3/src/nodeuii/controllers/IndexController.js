import { route, GET, POST, before } from 'awilix-koa';

@route('/')
@route('/index.html')
export default class IndexController {
    constructor({indexService}) {
        this.indexService = indexService;
    }
    @GET()
    async function (ctx, next) {
        const result = await this.indexService.getData();
        ctx.body = await ctx.render('index/pages/index', {data: result});
    }
}