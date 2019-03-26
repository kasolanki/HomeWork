module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    ExerciseId: DataTypes.NUMBER,
    ExerciseType: DataTypes.STRING,
    ExerciseName: DataTypes.STRING,
    Description: DataTypes.TEXT,
    ExerciseEquipment: DataTypes.STRING,
    DefaultSets: DataTypes.NUMBER
  })
  return Exercise
}