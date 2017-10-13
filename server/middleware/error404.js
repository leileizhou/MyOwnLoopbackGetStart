/**
 * Created by zhoull on 2017/10/12.
 */
'use strict';

module.exports = function(options) {
  return function raiseUrlNotFoundError(req, res, next) {
    console.log('?');
    var error = new Error('Cannot ' + req.method + ' ' + req.url);
    error.status = 404;
//------------------- max custom 404 ------//
    if (req.accepts('text/html')) {
      console.log( "404 ERR! " );
      return res.sendFile('404.html', { root: __dirname + './../../client/' });
    }
//---------------------------------------//
    next(error);
  };
};
