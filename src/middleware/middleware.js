


const userValidation= function(req,res,next){
    let isFreeAppUserheader=req.headers.isfreeappuser
    if(!isFreeAppUserheader){
        
        res.send({msg:"the request is missing a mandatory header"})
    }
    next()
    

};
const orderValidation= function(req,res,next){
    let header=req.headers.isfreeappuser
    if(header!=undefined){
        next()
    }
    else{
        console.log("the request is missing a mandatory header")
        res.send({msg:"the request is missing a mandatory header"})
    }
}
const updateHeader=function(req,res,next){
    let header=req.headers.isfreeappuser
    header=true
    next()
}

module.exports={
    userValidation:userValidation,
    orderValidation:orderValidation,
    updateHeader:updateHeader
}