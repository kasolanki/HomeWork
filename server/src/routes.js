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
    app.get('/Exercise/:id', ExerciseController.show)
    app.post('/Exercise', ExerciseController.post)
    app.delete('/Exercise/:id',ExerciseController.delete)
    app.put('/Exercise/:id',ExerciseController.update)


    app.get('/People', PeopleController.index)
    app.get('/People/:id', PeopleController.show)
    app.post('/People', PeopleController.post)
    app.delete('/People/:id',PeopleController.delete)
    app.put('/People/:id',ExerciseController.update)

    app.get('/Routine', RoutineController.index)
    app.get('/Routine/:id', RoutineController.show)
    app.post('/Routine', RoutineController.post)
    app.delete('/Routine/:id',RoutineController.delete)
    app.put('/Routine/:id',ExerciseController.update)

    app.get('/ExerciseTarget', ExerciseTargetController.index)
    app.get('/ExerciseTarget/:id', ExerciseTargetController.show)
    app.post('/ExerciseTarget', ExerciseTargetController.post)
    app.delete('/ExerciseTarget/:id',ExerciseTargetController.delete)
    app.put('/ExerciseTarget/:id',ExerciseController.update)

    app.get('/LogEntry', LogEntryController.index)
    app.get('/LogEntry/:id', LogEntryController.show)
    app.post('/LogEntry', LogEntryController.post)
    app.delete('/LogEntry/:id',LogEntryController.delete)
    app.put('/LogEntry/:id',LogEntryController.update)

    app.get('/PeopleRoutines', PeopleRoutinesController.index)
    app.get('/PeopleRoutines/:id', PeopleRoutinesController.show)
    app.post('/PeopleRoutines', PeopleRoutinesController.post)
    app.delete('/PeopleRoutines/:id',PeopleRoutinesController.delete)
    app.put('/PeopleRoutines/:id',PeopleRoutinesController.update)

    app.get('/RoutineExercise', RoutineExerciseController.index)
    app.get('/RoutineExercise/:id', RoutineExerciseController.show)
    app.post('/RoutineExercise', RoutineExerciseController.post)
    app.delete('/RoutineExercise/:id',RoutineExerciseController.delete)
    app.put('/RoutineExercise/:id',RoutineExerciseController.update)
  }
