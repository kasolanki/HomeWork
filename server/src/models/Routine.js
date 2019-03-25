module.exports = (sequelize, DataTypes) => {
    const Routine = sequelize.define('Routine', {
      User: DataTypes.NUMBER,
      Routine: DataTypes.STRING,
      RoutineEx: DataTypes.NUMBER,
      Exercise: DataTypes.NUMBER,
      Workout: DataTypes.NUMBER
    })
    return Routine
  }