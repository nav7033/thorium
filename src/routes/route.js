const express = require('express');
const router = express.Router();
const _=require('lodash');

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
router.get('/sol1',function(req,res){
    let arr=[1,2,3,5,6,7]
    let missingNumber,n=arr[arr.length-1]
    let sumArr=0;
    let num=n*(n+1)/2;
    
    
    for(let i=0;i<arr.length;i++){
        sumArr +=arr[i];
        return sumArr
    }
    missingNumber=num-sumArr;
    console.log(missingNumber)
    res.send({data:missingNumber})




})
router.get('/sol2',function(req,res){
    let arr=[33,34,35,37,38]
    let sumArr=0;
    let n=arr[arr.length-1];
    let len=arr.length;
    for(let i=0;i<arr.length;i++){
        sumArr +=arr[i];
        return sumArr;
    }
    let consecutive=len+1*(arr[0]+n);
    let MissingNum=consecutive-sumArr;
    console.log(MissingNum);
    res.send({data:MissingNum});

})

//question-1 this Api will fetch all movies
router.get('/movies',function(req,res){
    res.send('["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"]')
});
//question-2 API fetch  movies by index number
router.get('/movies/:index1',function(req,res){
   const movie=["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
   let id=req.params.index1;
   if(valid>movie.length-1){
       res.send("not exist")
   }
   else{
       res.send(movie[id])
   }

});
//question-3 api handle scenario index>valid?use avalid index
router.get('/movies1/:index',function(req,res){
    const movi =["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
    let validNum=req.params.index
    if(validNum<movi.length-1){
        res.send("pls enter  valid index")
    }

    
});
router.get('/films',function(req,res){
    const newArr=[];
    const movi =["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
    movi.forEach(function(data,index){
        let object={};
        object.id=index+1;
        object.name=data;
        newArr.push(object)

    })
    res.send(newArr)
});

router.get('/film/:filmid',function(req,res){
    const moviesName=[
        {
            "id":1,
            "name":"3-idiots"
        },
        {
            "id":2,
            "name":"Bacchan Pandey"
        },
        {
            "id":3,
            "name":"Avengers"
        },
        {
            "id":4,
            "name":"Spider man"
        },
        {
            "id":5,
            "name":"Dangal"
        }

    ];
    const filmid=req.params.filmid;
    const object=_.find(moviesName,{'id':Number(id)});
    if(object==undefined){
        res.send("pls enter 1 to 5 other out of range")
    }else{
        res.send(object);
    }
});





module.exports = router;