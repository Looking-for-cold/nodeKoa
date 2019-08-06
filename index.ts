import "reflect-metadata";
import { createConnection } from "typeorm";
import { router } from "./router/addrule"

const Koa = require("koa");
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const cors = require("koa-cors");
const views = require('koa-views');
const convert = require('koa-convert');

const app = new Koa();


createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "add",
    entities: [
        __dirname + "/mysql/*.ts",
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities\

   // console.log(connection);
}).catch(error => console.log(error));


app.use(convert(serve(__dirname + '/public')))

app.use(convert(views(__dirname + '/views', {
   
})))
app.use(convert(cors(
   {
    origin:'*',
    allowHeaders: ['Content-Type:application/x-www-form-urlencoded'],
    allowMethods: ['GET', 'POST', 'DELETE'],
    maxAge: 30,
   }

)));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(9001);
const Server = require('ws').Server;
// 这里是设置服务器的端口号，和上面的3000端口不用一致
const ws = new Server({ port: 9999 });

// 监听服务端和客户端的连接情况
ws.on('connection', function(socket) {
    // 监听客户端发来的消息
    socket.on('message', function(msg) {
        console.log(msg);   // 这个就是客户端发来的消息
        // 来而不往非礼也，服务端也可以发消息给客户端
        socket.send(`这里是服务端对你说的话： ${msg}`);
    });
});