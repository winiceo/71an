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
  var tags=req.params.tag;
   
  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
  var query = {};
  
  if(tags!="undefined"&&tags) {
    query['keywords']=new RegExp( tags, "i");//new RegExp(tags);//模糊查询参数
  }
 
  var limit = config.list_topic_count;
  var options = { skip: skip, limit: limit,sort:{"datetime":-1}};
 
  
// 取分页数据
  //var pagesCacheKey =  "pages1"+ JSON.stringify(options);
  
  var fields={title:"title",_id:"_id",datetime:"datetime",image_list:"image_list",abstract:"abstract",keywords:"keywords"};
      Article.find(query, fields,options, function (err, topics) {
           
             var query = {}; 

                var limit = 5;
                var options = {  limit: limit,sort:{"click_num":-1}};
               
                var fields={title:"title",_id:"_id" };

                Article.find(query, fields, options, function (err, other) {
                   res.render('index',{topics:topics,tags:tags,other:other}) 
              })
          
        //  proxy.emit('other_index', topics);
      
      })

             
  // cache.get(pagesCacheKey, proxy.done(function (pages) {

  //   if (pages) {
  //     proxy.emit('pages', pages);
  //   } else {
        
  //     var fields={title:"title",_id:"_id",datetime:"datetime",image_list:"image_list",abstract:"abstract",keywords:"keywords"};
  //     Article.find(query, fields,options, function (err, topics) {
        
        
  //        cache.set(pagesCacheKey, topics, 3600*1);
  //       proxy.emit('page_index', topics);
      
  //     })
       
  //    }
  // }));
  proxy.all('page_index',
    function ( topics) {
      res.render('index',{topics:topics,tags:tags,other:topics}) 
    }); 
    
};



//加载更多
exports.loadmore = function (req, res, next) {

     
//article.save();
  var skip=parseInt(req.query.skip,10)||25;
  var tags=req.query.tag;
  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
 // 取主题
  var query = {};
   
  if(tags!="undefined"&&tags) {
    query['keywords']=new RegExp(tags);//模糊查询参数
  }
  
   

  var limit = config.list_topic_count;
  var options = { skip: skip, limit: limit,sort:{"datetime":-1}};
// 取分页数据
var fields={title:"title",_id:"_id",datetime:"datetime",image_list:"image_list",abstract:"abstract",keywords:"keywords"};

      Article.find(query, fields, options, function (err, topics) {
        res.json({topics:topics}) 
      
      })
  // var pagesCacheKey = JSON.stringify(query) + JSON.stringify(options);
  // cache.get(pagesCacheKey, proxy.done(function (pages) {
    
  //   if (pages) {
  //     proxy.emit('ajaxpages', pages);
  //   } else {
  //     var fields={title:"title",_id:"_id",datetime:"datetime",image_list:"image_list",abstract:"abstract",keywords:"keywords"};

  //     Article.find(query, fields, options, function (err, topics) {
  //       cache.set(pagesCacheKey, topics, 60 * 1);
  //       proxy.emit('ajaxpages', topics);
      
  //     })
       
  //   }
  // }));
  // proxy.all('ajaxpages',
  //   function ( pages) {
  //     res.json({topics:pages}) 
       
  //   }); 
  
  
};
exports.collections=function(req,res,next){
  var data='{"data":[{"_id":214,"name":"71an","slug":"71an","owner":"leven","description":"","color":"#FFC107","__v":0,"items":[],"dateCreated":"2015-12-01T11:06:21.751Z","type":"public"}]}';
  return res.json(JSON.parse(data))
};
exports.contributors=function(req,res,next){
  var data='{"data":[{"_id":214,"name":"71an","slug":"71an","owner":"leven","description":"","color":"#FFC107","__v":0,"items":[],"dateCreated":"2015-12-01T11:06:21.751Z","type":"public"}]}';
  return res.json(JSON.parse(data))
};

exports.notifications=function(req,res,next){
  var data=[];
  return res.json(data)
};
 
//阅读
exports.read = function (req, res, next) {
 
     
//article.save();
  var id= req.params.id;
   var proxy = new eventproxy();
  proxy.fail(next);
   
 var query={};
   if( !isNaN( id ) )
  {
    query={"oid":id};
    
  }else{
      query={"_id":id};
  }
  var readid = JSON.stringify(query);
  Article.find(query, function (err, topic) {
          if(err){
            return res.status(403).send('主题不存在');
          }
          

           var topic=topic[0];
           if(topic){

            topic.click_num += 1;
            topic.save();
            var keys=topic.keywords.split(",");
            var topic2 = extend(topic._doc,{tags:topic.keywords.split(",")});
            var other=[]
            if(keys&&keys.length>0){
              var query = {};
         
         
              query['keywords']=new RegExp(keys[0]);//模糊查询参数
              query['_id']={"$ne":id}
        
         

                var limit = 5;
                var options = {  limit: limit,sort:{"datetime":-1}};
               
                var fields={title:"title",_id:"_id" };

                Article.find(query, fields, options, function (err, topics) {
                    proxy.emit('other', topics);
                  
                  })
            }
            proxy.emit('readid', topic2);
             
          }else{
            return res.status(403).send('主题不存在');
          }
    
     
      })


  // cache.get(readid, proxy.done(function (pages) {

  //   if (pages) {
  //     proxy.emit('readid', pages);
  //   } else {
  //     Article.find(query, function (err, topic) {
  //         if(err){
  //           return res.status(403).send('主题不存在');
  //         }
          

  //          var topic=topic[0];
  //          if(topic){
  //           var topic2 = extend(topic._doc,{tags:topic.keywords.split(",")});
  //           cache.set(readid, topic2, 3600 * 7);
  //           proxy.emit('readid', topic2);
  //         }else{
  //           return res.status(403).send('主题不存在');
  //         }
    
     
  //     })
      
       
  //   }
  // }));
  proxy.all('readid','other',
    function ( pages,other) {
      res.render('read',{topic:pages,other:other}) 
       
    });


  
     
 

   

   
  
};

//阅读
exports.delete = function (req, res, next) {
  
//article.save();
  var id= req.params.id;
      var query={};
   if( !isNaN( id ) )
  {
    query={"oid":id};
    
  }else{
      query={"_id":id};
  }

  var readid = JSON.stringify(query);
      Article.remove(query, function (err, topic) {
          if(err){
            return res.status(403).send('主题不存在');
          } 
           cache.set(readid, "");
          return res.status(200).send('ok');
     
      }) 
   
  
};
