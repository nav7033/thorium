const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
}
catch (error){
  res.status(500).send({status:false,msg:error.message})


}


};

const loginUser = async function (req, res) {
 try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user){
    return res.status(401).send({status: false,msg: "username or the password is not corerct"});
  }
  
  
  let payload = {userId:user._id}
  let token = jwt.sign(payload,"Thorium");
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });

  
 }
 catch(error){
   res.status(500).send({status:false,msg:error.message})

 }
};




const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  }
  catch(error){
    res.status(500).send({status:false, msg:error.message})
  }

  

};




const updateUser = async function (req, res) {
 try{
   let userId = req.params.userId;
   let user = await userModel.findById(userId);
   if (!user) {
     return res.status(400).send("No such user exists")
    }
    let userData = req.body
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(200).send({ status: updatedUser, data: updatedUser });
  }
  catch(error){
    res.status(500).send({status:false,msg:error.message})
  }


 }





const postMessage = async function (req, res) {
    try{
      let message = req.body.message
      
      let userToBeModified = req.params.userId
      
      let user = await userModel.findById(userToBeModified)
      if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
      let updatedPosts = user.posts
      updatedPosts.push(message)
      let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
      return res.status(200).send({status: true, data: updatedUser})
    }
    catch(error){
      res.status(500).send({status:false,msg:error.message})
    }

}


const deleteUser= async function( req,res){
  try{
    let userId=req.params.userId
    let udpateUser=await userModel.findByIdAndUpdate({_id:userId},{isDelete:true},{new:true})
    res.status(200).send({status:true,udpateUser})
  }
  catch(error){
    res.status(500).send({status:false,msg:error.message})
  }

  

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser=deleteUser
