import IndexModel from "../models/IndexModel";
const indexController = {
    indexAction(){
        return async(ctx, next) => {
            const indexModelIns = new IndexModel();
            const result = await indexModelIns.getData();
            ctx.body = result;
        }
    }
}
export default indexController;