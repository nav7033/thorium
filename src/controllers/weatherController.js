const axios = require("axios")

let weatherMap = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid



        console.log(`query params are: ${q} ${appid}`)

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`

        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let soretedTemp = async function (req, res) {
    try {
        const newArr = [];
        let appid = req.query.appid
        let q = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < q.length; i++) {

            console.log(`query params are: ${q[i]} ${appid}`)

            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q[i]}&appid=${appid}`,

            }


            const dataCollect = await axios(options);
            newArr.push({
                'city': q[i],
                'temp': dataCollect.data.main.temp
            });
        }
        const sortedData = newArr.sort(function (ele, ind) {
            return ele.temp - ind.temp
        })
        return res.status(200).send({status:true,msg:sortedData})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }




}
module.exports.weatherMap = weatherMap
module.exports.soretedTemp = soretedTemp






