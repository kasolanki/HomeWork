const { People } = require('../models')


module.exports = {
    async index (req, res) {
      try {
        const exercises = await People.findAll({
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
        const ex = await People.findByPk(req.params.id)
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
            const ex = await People.findByPk(id)
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
        await People.update(req.body, {
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
        const ex = await People.create(req.body)
        res.send(ex)
        }   
        catch (err) {  
          res.status(500).send({
            error: 'An error has occured trying to put your exercise data.'
        })
        }
    }
}
