const { Exercise } = require('../models')


module.exports = {
    async index (req, res) {
      try {
        const exercises = await Exercise.findAll({
          limit: 10
        })
        res.send(exercises)
      }   
       catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to get the exercise.'
          })
        }
      },
    async show (req, res) {
      try {
        const ex = await Exercise.findByPk(req.params.categoryId)
        res.send(ex)
      }   
      catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to get your personal exercise.'
          })
        }
      },
    async post (req, res) {
        try {
        const ex = await Exercise.create(req.body)
        res.send(ex)
        }   
        catch (err) {  
          res.status(500).send({
            error: 'An error has occured trying to put your exercise.'
        })
        }
    }
}
