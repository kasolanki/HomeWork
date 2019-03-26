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
        const ex = await PeopleRoutines.findByPk(req.params.id)
        res.send(ex)
      }   
      catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to get specific exercise data.'
          })
        }
      },
      async delete (req, res) {
        try{
            const {id} = req.params
            const ex = await PeopleRoutines.findByPk(id)
            await ex.destroy()
            res.send(ex)
        }catch(err){
            res.status(500).send({
              error:'Error occured in deleting record'
            })
        }
    },
    async update (req, res) {
      try {
        await PeopleRoutines.update(req.body, {
          where: {
            id: req.params.id
          }
        })
        res.send(req.body)
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to update the entry'
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
