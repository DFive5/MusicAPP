const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
//vue目录
const HOST = 'http://106.15.237.176:3000'
const ERR_OK = 200

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})
//定义启动的端口号
app.listen(4200);