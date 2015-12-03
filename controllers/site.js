/*!
 * nodeclub - site index controller.
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * Copyright(c) 2012 muyuan
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

 
var config       = require('../config');
var eventproxy   = require('eventproxy');
var cache        = require('../common/cache');
var xmlbuilder   = require('xmlbuilder');
var renderHelper = require('../common/render_helper');
var _            = require('lodash');
var models     = require('../models');
var Article      = models.Article;
var extend = require('util')._extend;
exports.index = function (req, res, next) {
   var skip=parseInt(req.query.skip,10)||0;
   
  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
  var query = {};
   

  var limit = config.list_topic_count;
  var options = { skip: skip, limit: limit,sort:{"datetime":-1}};

  Article.find(query, {}, options, function (err, topics) {
      res.render('index',{topics:topics}) 
  })
   
    
};



//加载更多
exports.loadmore = function (req, res, next) {

     
//article.save();
  var skip=parseInt(req.query.skip,10)||25;
   
  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
  var query = {};
   

  var limit = config.list_topic_count;
  var options = { skip: skip, limit: limit,sort:{"datetime":-1}};

  Article.find(query,{},options ,function (err, topics) {
     res.json({topics:topics}) 
  })
     
  
  
};
 
//阅读
exports.read = function (req, res, next) {
 
     
//article.save();
  var id= req.params.id;
   
   
 var query={};
   if( !isNaN( id ) )
  {
    query={"oid":id};
    
  }else{
      query={"_id":id};
  }
  Article.find(query, function (err, topic) {
    if(err){
      return res.status(403).send('主题不存在');
    }
    

     var topic=topic[0];
     if(topic){
      var topic2 = extend(topic._doc,{tags:topic.keywords.split(",")});
      
      res.render('read',{topic:topic2}) 
    }else{
      return res.status(403).send('主题不存在');
    }
    
     
  })
     
 

  // // 取排行榜上的用户
  // cache.get('tops', proxy.done(function (tops) {
  //   if (tops) {
  //     proxy.emit('tops', tops);
  //   } else {
  //     User.getUsersByQuery(
  //       {is_block: false},
  //       { limit: 10, sort: '-score'},
  //       proxy.done('tops', function (tops) {
  //         cache.set('tops', tops, 60 * 1);
  //         return tops;
  //       })
  //     );
  //   }
  // }));
  // // END 取排行榜上的用户

  // // 取0回复的主题
  // cache.get('no_reply_topics', proxy.done(function (no_reply_topics) {
  //   if (no_reply_topics) {
  //     proxy.emit('no_reply_topics', no_reply_topics);
  //   } else {
  //     Topic.getTopicsByQuery(
  //       { reply_count: 0, tab: {$ne: 'job'}},
  //       { limit: 5, sort: '-create_at'},
  //       proxy.done('no_reply_topics', function (no_reply_topics) {
  //         cache.set('no_reply_topics', no_reply_topics, 60 * 1);
  //         return no_reply_topics;
  //       }));
  //   }
  // }));
  // // END 取0回复的主题

  // // 取分页数据
  // var pagesCacheKey = JSON.stringify(query) + 'pages';
  // cache.get(pagesCacheKey, proxy.done(function (pages) {
  //   if (pages) {
  //     proxy.emit('pages', pages);
  //   } else {
  //     Topic.getCountByQuery(query, proxy.done(function (all_topics_count) {
  //       var pages = Math.ceil(all_topics_count / limit);
  //       cache.set(pagesCacheKey, pages, 60 * 1);
  //       proxy.emit('pages', pages);
  //     }));
  //   }
  // }));
  // END 取分页数据

   
  
};
