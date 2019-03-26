module.exports = (sequelize, DataTypes) => {
    const LogEntry = sequelize.define('LogEntry', {
      PersonId: DataTypes.NUMBER,
      Goal: DataTypes.STRING,
      SetNumber: DataTypes.NUMBER,
      Weight: DataTypes.NUMBER,
      Reps: DataTypes.NUMBER,
      TimeRecorded: DataTypes.NUMBER,
      DefaultSets: DataTypes.NUMBER
    })
    return LogEntry
  }