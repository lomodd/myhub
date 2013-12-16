var mongodb = require('./db'), markdown = require('markdown').markdown;
var settings = require('../settings');

function Dict(word,classif,tags,content) {
  this.word = word;
  this.classif = classif;
  this.tags = tags;
  this.content = content;
}

module.exports = Dict;

//存储一篇文章及其相关信息
Dict.prototype.save = function(callback) {
    var date = new Date();
    //存储各种时间格式，方便以后扩展
    var time = {
        date : date,
        year : date.getFullYear(),
        month : date.getFullYear() + "-" + (date.getMonth() + 1),
        day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    }
    //要存入数据库的文档
    var dict = {
        word: this.word,
        classif: this.classif,
        time: time,
        tags: this.tags,
        content: this.content
    };
    //打开数据库
    mongodb.connect(settings.uri,function(err, db) {
        if (err) {
            return callback(err);
        }
        //读取 posts 集合
        db.collection('dict', function(err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //将文档插入 posts 集合
            collection.insert(dict, {
                safe : true
            }, function(err) {
                db.close();
                if (err) {
                    return callback(err);
                    //失败！返回 err
                }
                callback(null);
                //返回 err 为 null
            });
        });
    });
};

