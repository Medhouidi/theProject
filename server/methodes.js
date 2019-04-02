const url = 'mongodb://localhost:27017/testing';
const bcrypt = require('bcrypt-nodejs')
var mongoose = require('mongoose');
var userSchema = require('./Schemas/userSchema')
const jwt = require('jsonwebtoken')




exports.register = async (req, res) => {

  const connect = await mongoose.connect(url,{ useNewUrlParser: true })
  if(connect){
   const a = new userSchema({
     name:req.body.name,
     mail:req.body.mail,
     age: req.body.age,
     password:bcrypt.hashSync(req.body.password)
   }).save()
   if(a)res.send({success:'ok'})
   else res.send({error:'not saved'})
  }
  else res.send({error:'not connected'})

}


exports.login = async (req, res) => {

  const connect = await mongoose.connect(url,{ useNewUrlParser: true })
  if (connect) {

    const find = await userSchema.findOne({ mail:req.body.mail })
    if(find){
      var valid = bcrypt.compareSync(req.body.password,find.password)
      if(valid){
      const token = jwt.sign({mail:find.mail},'blog')
      res.send({token:token})
      }else res.send({error:'wrong password'})

    }else res.send({error:'user not found'})

  }else res.send({error:'not connected'})


}
