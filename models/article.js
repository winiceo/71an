var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var config    = require('../config');
var _         = require('lodash');
 
var ArticleSchema = new Schema({
  abstract:{type:String},
  title: { type: String },
  content: { type: String },
  image_list:{type:Array},
  datetime: { type: Date, default: Date.now },
  keywords:{type:String},
  display_url:{type:String},
  behot_time:{type:Number},
  tag:{type:String},
  media_name:{type:String},
  article_url:{type:String},
  has_video:{type:String},
  click_num:{type:Number},
  type:{type:Number},
  oid:{type:Number} ,
});

ArticleSchema.plugin(BaseModel);
ArticleSchema.index({date_time: -1});
ArticleSchema.index({display_url: -1,unique:true});
  
mongoose.model('Article', ArticleSchema,"article");
