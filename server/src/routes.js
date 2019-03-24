const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseController = require('./controllers/ExerciseController')
const ExerciseDetailController = require('./controllers/ExerciseDetailController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register) 
  app.post('/login',
    AuthenticationController.login)

    app.get('/exercise',
    ExerciseController.index)
    app.get('/exercise/:categoryId',
    ExerciseController.show)
    app.post('/exercise',
    ExerciseController.post)

    app.get('/ExerciseDetail',
    ExerciseDetailController.index)
    app.get('/ExerciseDetail/:logId',
    ExerciseDetailController.show)
    app.post('/ExerciseDetail',
    ExerciseDetailController.post)
}
