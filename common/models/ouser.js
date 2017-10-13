'use strict';

module.exports = function (Ouser) {

  Ouser.testCeate = function (data, callback) {
    Ouser.create([{
      nickname: 'leiz',
      email: '753013795@qq.com',
      password: '111111',
    }], function(err, coffeeShops) {
      if (err) return callback(err);

      console.log('Models created: \n', coffeeShops);
      callback(err, coffeeShops);
    });
  };
  Ouser.remoteMethod('testCeate', {
    description: '通过 qrCode 获取设备的详情',
    isStatic: true,
    accepts: [
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {
          source: 'body',
        },
        description: ' ',
      },
    ],
    returns: {
      arg: 'result',
      type: 'object',
      root: true,
      description: '',
    },
    http: {
      verb: 'post',
    },
  });
  Ouser.prototype.modify = function (data, callback) {
    callback(null, callback);
  };

  Ouser.remoteMethod(
    'modify',
    {
      description: '输入一个字符串，返回它',
      isStatic: false,
      accepts: [
        {arg: 'content', type: 'string', required: true},
      ],
      http: {path: '/modify', verb: 'get'},
      returns: {arg: 'ret', type: 'string', root: true, required: true},
    }
  );
};



