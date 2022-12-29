const fetch = require('node-fetch');
require('dotenv').config();



async function getnews(req,res){
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_key}`).then(resp=>resp.json()).then(data=>res.send(data))
}

module.exports={getnews}