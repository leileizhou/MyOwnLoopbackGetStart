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

  // Ouser.beforeRemote('create', function(context, user, next) {
  //   console.log('--------------------ouser beforeRemote create');
  //   context.args.data.date = Date.now();
  //   context.args.data.publisherId = context.req.accessToken.userId;
  //   next();
  // });

  Ouser.afterRemote('modify', function(ctx, result, next) {
    if (!ctx.result.emailVerified && !ctx.result.username) {
      var subject = '注册邮件';
      var template = path.resolve(path.join(__dirname, '..', '..', 'client', 'templates', 'verify.ejs'));
      ctx.result.verify({
        type: 'email',
        from: 'admin@domain.com', //发送邮箱
        to: ctx.result.email, //用户邮箱
        subject: subject,
        template: template,
      }, function(err, data) {
        if (err) {
          console.error(err);
        }
        next();
      });
    } else {
      next();
    }
  });



  Ouser.tts = function (data, callback) {
    callback(null, callback);
  };

  Ouser.remoteMethod(
    'tts',
    {
      description: '输入一个字符串，返回它',
      isStatic: true,
      accepts: [
        {arg: 'content', type: 'string', required: true},
      ],
      http: {path: '/tts', verb: 'get'},
      returns: {arg: 'ret', type: 'string', root: true, required: true},
    }
  );
};



