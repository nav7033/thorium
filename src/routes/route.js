const express = require('express');
const router = express.Router();
const _=require('lodash');

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//question-1 this Api will fetch all movies
router.get('/movies',function(req,res){
    res.send('["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"]')
});
//question-2 API fetch  movies by index number
router.get('/movies/:indexNumber',function(req,res){
   const movie=["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
   let valid=req.params.indexNumber;
   if(valid>movie.length-1){
       res.send("not exist")
   }
   else{
       res.send(movie[id])
   }

});
//question-3 api handle scenario index>valid?use avalid index
router.get('/movies/:index',function(req,res){
    const movi =["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
    let validNum=req.params.index
    if(validNum<movi.length-1){
        res.send("pls enter  valid index")
    }

    
});
router.get('/films/:indexid',function(req,res){
    const newArr=[];
    const movi =["Kashmir files","Bacchan Pandey","Fukrey","Dabang","khiladi 420"];
    movi.forEach(function(data,index){
        let object={};
        object.id=index+1;
        object.name=data;
        newArr.push(object)

    });
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