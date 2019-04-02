var mongoose = require('mongoose')

const user = mongoose.Schema({
  name:{type:String,required:true},
  mail:{type:String,required:true},
  age:{type:Number},
  password:{type:String,required:true},
})

module.exports=mongoose.model('user',user)
