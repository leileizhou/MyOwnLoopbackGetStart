# My Application

The project is generated by [LoopBack](http://loopback.io).

一.总结：
1.ouser.json acls 中 定义的角色(admin)
{
      "accessType": "EXECUTE",
      "principalType": "ROLE",
      "principalId": "admin",
      "permission": "ALLOW",
      "property": "modify"
}
这样定义不是说admin可以不登录或者不设置token访问该方法，而是只有admin登录并设置token后才能访问该方法，其他都role都不能访问该方法.