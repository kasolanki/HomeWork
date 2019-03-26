module.exports = (sequelize, DataTypes) => {
    const PeopleRoutines = sequelize.define('PeopleRoutines', {
      PRId: DataTypes.NUMBER,
      PersonId: DataTypes.NUMBER,
      RoutineId: DataTypes.NUMBER,
      RoutienDate: DataTypes.NUMBER,
      TimeTaken: DataTypes.NUMBER
    })
    return PeopleRoutines
  }