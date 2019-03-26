module.exports = (sequelize, DataTypes) => {
    const Routine = sequelize.define('Routine', {
      RoutineId: DataTypes.NUMBER,
      RoutineName: DataTypes.STRING,
      RoutineEx: DataTypes.STRING,
      RoutineTime: DataTypes.NUMBER
    })
    return Routine
  }