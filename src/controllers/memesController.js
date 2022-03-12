let axios = require("axios")




let getMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let memesId = await axios(options);
        console.log(memesId)
        let data = memesId.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

let memesCreation = async function (req, res) {
    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        console.log(`query params are: ${id} ${text0} ${text1}${username}${password}`)

        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,

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

module.exports.getMemes = getMemes
module.exports.memesCreation = memesCreation