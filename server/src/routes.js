const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseController = require('./controllers/ExerciseController')
const ExerciseDetailController = require('./controllers/ExerciseDetailController')
const RunningTrackController = require('./controllers/RunningTrackController')
const RoutineController = require('./controllers/RoutineController')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register) 
  app.post('/login', AuthenticationController.login)

    app.get('/exercise', ExerciseController.index)
    app.get('/exercise/:categoryId', ExerciseController.show)
    app.post('/exercise', ExerciseController.post)

    app.get('/ExerciseDetail', ExerciseDetailController.index)
    app.get('/ExerciseDetail/:logId', ExerciseDetailController.show)
    app.post('/ExerciseDetail', ExerciseDetailController.post)

    app.get('/RunningTrack', RunningTrackController.index)
    app.get('/RunningTrack/:equipId', RunningTrackController.show)
    app.post('/RunningTrack', RunningTrackController.post)

    app.get('/Routine', RoutineController.index)
    app.get('/Routine/:userId', RoutineController.show)
    app.post('/Routine', RoutineController.post)
}
