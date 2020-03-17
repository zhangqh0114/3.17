# express 入门

1. 基于 node 的一个开放 web 应用的框架
2. 使用之前要进行安装

```bash
    npm install express
```

3. 使用 express

```bash
    const express = require("express");
    const app = express();
```

# 制作简单的接口

# 客户端调服务端的接口

# SSR 和 B(C)SR

1. SSR （server side render）把 html 结构生成的工作放到了服务端，把处理好的 html 返回给浏览器
2. BSR（browser side render）浏览器接收到服务端返回的数据，去处理数据生成 html 结构（ajax）

# nodemon 热更新 避免每一次修改需要重新启动服务器

```bash
    npm install nodemon -g
    nodemon ***
```

# 实现增删改查

1. 路由的使用
   - 先进入 index.js,通过 app.use(url,路由模块)里的 url 来确定是否进入到路由模块
   - 路径匹配，进入路由模块，根据路由提供的路径进行相应的处理，返回数据

# postman(测试不同请求)

# express-generator 脚手架 自动生成一个项目

```bash
    npm install -g express-generator
    express myApp -e
    cd myApp
    npm i
    npm start // node ./bin/www
```

# ejs 模板引擎语法

1. <%= %> 显示输出指定的内容到页面
2. <% %> 放了 js 代码，不会在页面中显示，通常是一些流程语句
3. <%- %> 将富文本解析后输出到页面上
4. <%- include(url,data) %> 在一个模板里面引入其他的模板

# 表单提交
