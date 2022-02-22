const express = require('express');
const router = express.Router();
const logger = require("../logger/logger")
const helper =require("../util/helper")
const formatter=require("../validator/formatter")
const lodash = require("../lodash/lodash")

  //firstquestion
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(logger.welcome);
    //=====================================
    console.log('question-2')
    console.log(helper.printDate());
    console.log(helper.printMonth());
    console.log(helper.getBatchInfo());
    //=========================================
    console.log('question-3')
    console.log(formatter.trimp());
    console.log(formatter.lowerCase());
    console.log(formatter.upperCase());


});
router.get('/hello', function (req, res) {
    res.send('hi,this lodash module')
    lodash.chunk();
    console.log("====tail===");
    lodash.tail();
    console.log("====unionFunction=====");
    lodash.unionFunction;
    console.log("====fromPairs====");
    lodash.fromPairs();


    
});




module.exports = router; 