const { PeopleRoutines } = require('../models')


module.exports = {
    async index (req, res) {
      try {
        const exercises = await PeopleRoutines.findAll({
          limit: 10
        })
        res.send(exercises)
      }   
       catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to get the exercise data.'
          })
        }
      },
    async show (req, res) {
      try {
        const ex = await PeopleRoutines.findByPk(req.params.PRId)
        res.send(ex)
      }   
      catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to get specific exercise data.'
          })
        }
      },
    async post (req, res) {
        try {
        const ex = await PeopleRoutines.create(req.body)
        res.send(ex)
        }   
        catch (err) {  
          res.status(500).send({
            error: 'An error has occured trying to put your exercise data.'
        })
        }
    }
}
