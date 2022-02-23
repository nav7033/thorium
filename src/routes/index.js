const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
let players=[ {

    "name": "manish",
  
    "dob": "1/1/1995",
  
    "gender": "male",
  
    "city": "jalandhar",
  
    "sports": [
  
      "swimming"
  
    ],
    
  
    "bookings": []
  
      
},

  {
  
   "bookingNumber": 1,
  
    "sportId": "",
  
    "centerId": "",
  
   "type": "private",
  
   "slot": '16286598000000',
  
   "bookedOn": '31/08/2021',
  
   "bookedFor": '01/09/2021'
  
  },
  
   
  
  {
  
   "bookingNumber": 2,
  
    "sportId": "",
  
    "centerId": "",
  
   "type": "private",
  
   "slot": '16286518000000',
  
   "bookedOn": '31/08/2001',
  
   "bookedFor": '01/09/2001'
  
  },
  
  
  
  {
  
    "name": "gopal",
  
    "dob": '1/09/1995',
  
    "gender": "male",
  
    "city": "delhi",
  
    "sports": [
  
      "soccer"
  
    ],
  
    "bookings": []
  
  },
  
  {
  
    "name": "lokesh",
  
    "dob": '1/1/1990',
  
    "gender": "male",
  
    "city": "mumbai",
  
    "sports": [
  
      "soccer"
  
    ],
  
    "bookings": []
  
  },
  
 //NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits )
 // Write a POST /players api that creates a new player ( that saves a player’s 
 //details and doesn’t allow saving the data of a player with a name that already exists in the data)
  
  ];
  router.post('/players', function(req,res){
      const playersData= req.body;
      let playersStatus=null;
      for(let i=0;i<players.length;i++){
          if(players[i].name==playersData.name){
              playersStatus=true;
              break;

          }
          else{
              playersStatus=false;
          }
          
      }
      if(!playersStatus){
          players.push(playersData)
          res.send(players)
      }
      else{
          res.send("player name is already exist..")
      }

/*1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. 
If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.
2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send 
an error message conveying the booking was already processed. For a relevant bookingId(which is new), add the booking object from request body
 to bookings array.
*/







     router.post("/player/:playerName/booking/:bookingId",function(req,res){
         const playerName=req.params.playerName;
         const bookingId=req.params.bookingId;
         const bookingDataNumber=req.body.num;

         bookingDataNumber.bookingNumber= Number(bookingId);
         let nameStatus="",idStatus="",i;
         for(i=0;i<players.length;i++){
             if(players[i].name=playerName){
                 nameStatus=i;
                 break;

             }
             else{
                 nameStatus=null;

             }
         }
         if(nameStatus!=null){
             if(players[nameStatus].bookingNum.length==0){
                 idStatus=players[nameStatus].bookingNum;

             }
             else{
                 for(let i=0 ;i<players[nameStatus].bookingNum.length;i++){
                     if(players[nameStatus].bookingNum[i].bookingNumber == bookingId){
                         idStatus=null;
                         break;

                     }
                     else{
                         idStatus=players[nameStatus].bookingNum;
                     }
                 }
             }
             if(idStatus !=null){
                 idStatus.push(bookingDataNumber);
                 response.send(players)
             }
             else{
                 res.send("the booking was already processed")
             }
         }
         else{
             res.send("players name not exist there !")
         }
     });

  
     

  });
  router.post("/test-post-3//", function(req, res) {
      let id = req.body.user
      let pwd= req.body.password

      console.log( id , pwd)
      console.log( req.body)
      res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


module.exports = router;