const { Op } = require('sequelize')
const { Worker } = require('../models/models');

class TeamController {

    async getAll(req, res, next) {
        var team;
        const {name, position} = req.query;
        if(name == null && position == null){
            team = await Worker.findAll()
        }else if(name == null){
            team = await Worker.findAll({where: {position: position}})
        }else if(position == null){
            team = await Worker.findAll({where: {name: name}})
        }else{
            team = await Worker.findAll({where: {name: name, position: position}})
        }
        return res.json({team})
    }
}

module.exports = new TeamController();
