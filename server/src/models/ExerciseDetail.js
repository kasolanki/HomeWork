module.exports = (sequelize, DataTypes) => {
    const ExerciseDetail = sequelize.define('ExerciseDetail', {
      ExerciseType: DataTypes.STRING,
      ExerciseEquipment: DataTypes.STRING,
      WorkoutTypes: DataTypes.NUMBER,
      Exercises: DataTypes.STRING, 
      Workouts: DataTypes.STRING,
      WorkoutJunction: DataTypes.NUMBER,
      Log: DataTypes.NUMBER,
      WorkoutTarget: DataTypes.NUMBER,
      LogEntries: DataTypes.NUMBER 
    })
    return ExerciseDetail
  }