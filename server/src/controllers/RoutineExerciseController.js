const { RoutineExercise } = require('../models')


module.exports = {
    async index (req, res) {
      try {
        const exercises = await RoutineExercise.findAll({
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
        const ex = await RoutineExercise.findByPk(req.params.REId)
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
        const ex = await RoutineExercise.create(req.body)
        res.send(ex)
        }   
        catch (err) {  
          res.status(500).send({
            error: 'An error has occured trying to put your exercise data.'
        })
        }
    }
}
