


var crypto = require('crypto'), fs = require('fs'),Dict = require('../models/dict.js');

module.exports = function(app) {
    app.post('/dictAddWord', function(req, res) {
        var currentUser = req.session.user, tags = [{
            "tag" : req.body.tag1
        }, {
            "tag" : req.body.tag2
        }, {
            "tag" : req.body.tag3
        }];
        var dict = new Dict(currentUser.name, currentUser.head, req.body.title, tags, req.body.post);
        dict.save(function(err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            req.flash('success', '添加成功!');
            res.redirect('/dictionary');
            //发表成功跳转到主页
        });
    });

}