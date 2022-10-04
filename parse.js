const axios = require('axios');
const cheerio = require ("cheerio");
const { Worker } = require('./models/models');

function parse(){
    const team = []

    axios
    .get("https://jetup.digital/team")
    .then((response) => {
    const $ = cheerio.load(response.data);
    const workers = $('.text-block-item')
        for (let i = 0; i < workers.length; i++) {
            let name = $(workers[i]).find(".user-name")[0]
            let position = $(workers[i]).find(".position")[0]
            team.push({name: $(name).text(), position: $(position).text()})
        }
        Worker.bulkCreate(team);
    })
    .catch((err) => console.log("Fetch error " + err));
}

module.exports = parse