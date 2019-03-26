module.exports = (sequelize, DataTypes) => {
    const RoutineExercise = sequelize.define('RoutineExercise', {
      REId: DataTypes.NUMBER,
      RoutineId: DataTypes.NUMBER,
      ExerciseId: DataTypes.NUMBER,
      RoutineName: DataTypes.STRING,
      ExerciseName: DataTypes.STRING
    })
    return RoutineExercise
  }