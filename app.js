
/**
 * Module dependencies.http://10.176.14.31:3000/
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var jslab = require('./routes/jslab');
var navigate = require('./routes/navigate');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var settings = require('./settings');
var flash = require('connect-flash');

var fs = require('fs');
var accessLog = fs.createWriteStream('access.log', {flags: 'a'});
var errorLog = fs.createWriteStream('error.log', {flags: 'a'});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.logger({stream: accessLog}));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: './public/images' }));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
  secret: settings.cookieSecret,
  key: settings.db,//cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}//30 days
 // , store: new MongoStore({
    // db: settings.db
  // })
}));
app.use(app.router);
app.use(function (err, req, res, next) {
  var meta = '[' + new Date() + '] ' + req.url + '\n';
  errorLog.write(meta + err.stack + '\n');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);

// app.get('/public/metroicon/index.html', function(req, res) {
    // res.sendfile('public/metroicon/index.html');
// });

var users = {};
//存储在线用户列表的对象

var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    console.log("conecting ^^^^^^^");
    //有人上线
    socket.on('online', function(data) {
        //将上线的用户名存储为 socket 对象的属性，以区分每个 socket 对象，方便后面使用
        socket.name = data.user;
        //users 对象中不存在该用户名则插入该用户名
        if (!users[data.user]) {
            users[data.user] = data.user;
        }
        //向所有用户广播该用户上线信息
        io.sockets.emit('online', {
            users : users,
            user : data.user
        });
    });
    //有人发话
    socket.on('say', function(data) {
        if (data.to == 'all') {
            //向其他所有用户广播该用户发话信息
            socket.broadcast.emit('say', data);//不包括自己
            //io.sockets.emit('say',data);//包括自己
        } else {
            //向特定用户发送该用户发话信息
            //clients 为存储所有连接对象的数组
            var clients = io.sockets.clients();
            //遍历找到该用户
            clients.forEach(function(client) {
                if (client.name == data.to) {
                    //触发该用户客户端的 say 事件
                    client.emit('say', data);
                }
            });
        }
    });
    
    //有人下线
    socket.on('disconnect', function() {
      //若 users 对象中保存了该用户名
      if (users[socket.name]) {
        //从 users 对象中删除该用户名
        delete users[socket.name];
        //向其他所有用户广播该用户下线信息
        socket.broadcast.emit('offline', {users: users, user: socket.name});
      }
    });

});
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
}); 

routes(app);
jslab(app);
navigate(app);
