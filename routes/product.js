const router = require("express").Router(); //路由模块
const fs = require("fs"); //文件模块 （增改）
let pdata = JSON.parse(fs.readFileSync("./data/pdata.json").toString());//读取pdata.json文件并转成对象
if (!pdata.data) { 
  pdata.data = [];//如果对象没有data属性 则赋值空数组
}

router.get("/", (req, res) => { //"/" === 在app.js中的/products 通过路由模块进入本文件
  //列表页面
  res.render("products/list", pdata);//当浏览器输入http://127.0.0.1:3000/products 渲染list.ejs页面
});
//新增页面
router.get("/addnew", (req, res) => {
  res.render("products/addnew", {});//当浏览器输入http://127.0.0.1:3000/products/addnew 渲染addnew.ejs页面
});
//form表单post请求 提交数据
router.post("/", (req, res) => {
  pdata.data.push(req.body);
  fs.writeFileSync("./data/pdata.json", JSON.stringify(pdata));
  //重定向,提交之后跳转到列表页面
  res.redirect("/products");
});

module.exports = router;
