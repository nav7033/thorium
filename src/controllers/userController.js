const orderModel=require("../models/orderM")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let userCreated= await userModel.create(data)
     res.send({msg:userCreated})
    
};


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    console.log(req.newAtribute)
    res.send({msg: allUsers})
}
const updated = async function(req,res){
    let data= req.body
    let isFreeAppUserHeader= req.headers.isFreeAppUser
    const userRes= await userModel.findByIdAndUpdate(data.userId,{
        isFreeAppUser:isFreeAppUserHeader},{new:true
    })
    const orderRes= await orderModel.findByIdAndUpdate(data.orderId,{
        isFreeAppUser:isFreeAppUserHeader},{new:true
    })
   res.send({msg:[userRes,orderRes]})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.updated=updated