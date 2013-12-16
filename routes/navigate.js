


var crypto = require('crypto'), fs = require('fs'), User = require('../models/user.js'), Post = require('../models/post.js'), Comment = require('../models/comment.js');

module.exports = function(app) {
    app.get('/dictionary', function(req, res) {
        console.log('now launching dictionary module .......');
         res.render('dictny/wordsArchive', {
            title : '我的wiki',
            user : req.session.user,
            success : req.flash('success').toString(),
            error : req.flash('error').toString()
        });
    });
}