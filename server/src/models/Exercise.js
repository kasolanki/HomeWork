module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    Category: DataTypes.STRING,
    Exercise: DataTypes.STRING,
    Sets: DataTypes.NUMBER,
    Person: DataTypes.STRING,
    Trainer: DataTypes.STRING
  })
  return Exercise
}