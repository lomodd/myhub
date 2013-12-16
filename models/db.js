var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
//module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {});
module.exports = MongoClient;