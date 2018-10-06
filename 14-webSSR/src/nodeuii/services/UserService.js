/**
 * @fileOverview 实现Index数据模型
 * @author yuanzhijia@yidengxuetang.com
 */

 /**
  * UserModel类 ，生成一段异步的数据
  * @class
  */
 export default class UserService { 
  /**
   * @constructor 
   * @param {string} app koa2上下文环境
   * */   
  constructor(app){

  }
  /**
   * 获取数据的API
   * @returns {Promise} 返回异步的处理结果
   * @example
   * return new Promise
   * getData
   */
  getData(id){
      return new Promise((resolve,reject)=>{
        resolve([{ id: 1, title: "koa" },{id: 2, title:"webpack"},{id: 3, title:"vue"}]);
          // setTimeout(function(){
          //     resolve(`Hello UserAction 【${id}】`);
          // },1000);
      });
  }
}