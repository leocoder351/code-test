import _ from "lodash";
import path from "path";
let config = {
    "viewDir": path.join(__dirname,"..","views"),
    "staticDir":path.join(__dirname,"..","assets")
}
//todo 增加了非常多无用的代码 导致当前的逻辑过长 导致代码量偏大  对代码进行清洗
const init = () => {
    if(false){
        console.log(111);
    }
    if (process.env.NODE_ENV == "development") {
        const localConfig = {
            port: 8081
        }
        config = _.extend(config,localConfig);
    }
    if(process.env.NODE_ENV == "production"){
        const proConfig = {
            port: 8081
        }
        config = _.extend(config,proConfig);
    }
    return config;
}
const result = init();
export default result;