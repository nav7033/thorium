const _ = require("lodash")

const chunk= ()=>{
    const monthName =["january","februray","march","april","may","june","july","august","september","october","november",
                      "december"];
                      console.log(_.chunk(monthName,3));

}
const tail= () =>{
    const firstOddNumber=[1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(firstOddNumber));
}
const unionFunction=()=>{
    const arr1=[1,2,4,5,3],arr2=[5,7,3,2,4,8],arr3=[9,10,11,3,4,5],arr4=[3,5,6,7,8 ,9],arr5=[4,3,6,5,3,6,9];
    console.log(_.union(arr1,arr2,arr3,arr4,arr5));

}
const fromPairs=()=>{
    pairsData=[["horror","The Shining"],
    ["drama","Titanic"],
    ["thriller","Shutter Island"],
    ["fantasy","pans Labyrinth"]];
    console.log(_.fromPairs(pairsData));

}
module.exports ={
    chunk: chunk,
    tail: tail,
    unionFunction: unionFunction,
    fromPairs: fromPairs

}
