

var crypto = require('crypto'), fs = require('fs'), User = require('../models/user.js'), Post = require('../models/post.js'), Comment = require('../models/comment.js');

module.exports = function(app) {
    app.get('/jslab', function(req, res) {
        console.log('js lab l.......');
             res.render('jslab/lock', {
                title : 'JS　LAB',
                user : req.session.user,
                success : req.flash('success').toString(),
                error : req.flash('error').toString()
            });
    });
}