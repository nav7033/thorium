const orderModel=require("../models/orderModel")
const productModel=require("../models/productModel")
const usermodel=require("../models/userModel")


const createOrder= async function (req, res) {
    let data= req.body
    let freeAppUserHeader=req.headers.isfreeappuser

    const userValidation= await orderModel.findById(data.userId)
    console.log(userValidation)
    if(userValidation=null){
        return res.send({msg:"user Id Required"})
    }
    const productValidation= await orderModel.findById(data.productId)
    if(productValidation=null){
        return res.send({msg:"product Id Requird"})
    }
    if(freeAppUserHeader==true){
        data.amount=0
        data.isFreeAppUser=true

        let orderCreated= await orderModel.create(data)
        res.send({msg:orderCreated})

    }
    else{
        const productPrice= await productModel.findById(data.productId.price)
        const userPrice= await usermodel.findById(data.userId.balance)
        if(userPrice>=productPrice){
            const diduction= await usermodel.findByIdAndUpdate(data.userId,{$inc:{balance:-productPrice.price},new:true

            })
            data.amount=productPrice.price
            data.isFreeAppUser=true
            
            return res.spend({msg:diduction})

            
        }
        else{
            return res.send({msg:"Insufficient Balance"})

        }

    }
    
        
    
    
    

  
}



module.exports={
    createOrder:createOrder
}
