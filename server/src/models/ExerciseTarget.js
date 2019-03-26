module.exports = (sequelize, DataTypes) => {
    const ExerciseTarget = sequelize.define('ExerciseTarget', {
      PersonId: DataTypes.NUMBER,
      BodyPart: DataTypes.STRING,
      NumberOfSet: DataTypes.NUMBER,
      Description: DataTypes.STRING,
      MinReps: DataTypes.NUMBER,
      MaxReps: DataTypes.NUMBER
    })
    return ExerciseTarget
  }