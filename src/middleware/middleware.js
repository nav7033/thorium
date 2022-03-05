const mid1= function(req,res,next){
    console.log("hi i am middleware")
    next()
}
const mid2= function(req,res,next){
    console.log("hi i am middleware")
    next()
}
const mid3= function(req,res,next){
    console.log("hi i am middleware")
    next()
}
module.exports={
    mid1:mid1,
    mid2:mid2,
    mid3:mid3
}