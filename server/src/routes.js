const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseController = require('./controllers/ExerciseController')
const PeopleController = require('./controllers/PeopleController')
const PeopleRoutinesController = require('./controllers/PeopleRoutinesController')
const RoutineController = require('./controllers/RoutineController')
const ExerciseTargetController = require('./controllers/ExerciseTargetController')
const LogEntryController = require('./controllers/LogEntryController')
const RoutineExerciseController = require('./controllers/RoutineExerciseController')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register) 
  app.post('/login', AuthenticationController.login)

    app.get('/Exercise', ExerciseController.index)
    app.get('/Exercise/:ExerciseId', ExerciseController.show)
    app.post('/Exercise', ExerciseController.post)

    app.get('/People', PeopleController.index)
    app.get('/People/:PersonId', PeopleController.show)
    app.post('/People', PeopleController.post)

    app.get('/Routine', RoutineController.index)
    app.get('/Routine/:RoutineId', RoutineController.show)
    app.post('/Routine', RoutineController.post)

    app.get('/ExerciseTarget', ExerciseTargetController.index)
    app.get('/ExerciseTarget/:PersonId', ExerciseTargetController.show)
    app.post('/ExerciseTarget', ExerciseTargetController.post)

    app.get('/LogEntry', LogEntryController.index)
    app.get('/LogEntry/:PersonId', LogEntryController.show)
    app.post('/LogEntry', LogEntryController.post)

    app.get('/PeopleRoutines', PeopleRoutinesController.index)
    app.get('/PeopleRoutines/:PRId', PeopleRoutinesController.show)
    app.post('/PeopleRoutines', PeopleRoutinesController.post)

    app.get('/RoutineExercise', RoutineExerciseController.index)
    app.get('/RoutineExercise/:REId', RoutineExerciseController.show)
    app.post('/RoutineExercise', RoutineExerciseController.post)
  }
