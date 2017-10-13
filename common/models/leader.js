'use strict';

module.exports = function(Leader) {
  Leader.test = function(content, cb) {
    cb(null, content);
  };

  Leader.remoteMethod(
    'test',
    {
      description: '输入一个字符串，返回它',
      accepts: [
        {arg: 'content', type: 'string', required: true},
      ],
      http: {path: '/test', verb: 'get'},
      returns: {arg: 'ret', type: 'string', root: true, required: true},
    }
  );
};
