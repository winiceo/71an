var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./topic');
require('./reply');
require('./topic_collect');
require('./message');
require('./article');
exports.Article        = mongoose.model('Article');

exports.User         = mongoose.model('User');
exports.Topic        = mongoose.model('Topic');
exports.Reply        = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.Message      = mongoose.model('Message');

