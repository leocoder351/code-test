import _ from 'lodash';
import path from 'path';

let config = {
  "env": process.env.NODE_ENV
};

// todo 增加了非常多的无用代码 导致当前逻辑过长 导致代码量偏大
// 上线前要清洗代码

const init = (app) => {
  if (process.env.NODE_ENV === 'development') {
    const localConfig = {
      port: 8081
    };
    config = _.extend(config, localConfig);
  }

  if (process.env.NODE_ENV === 'production') {
    const proConfig = {
      port: 8081
    };
    config = _.extend(config, proConfig);
  }

  return config;
};

export default app => init(app);