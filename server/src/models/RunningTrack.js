module.exports = (sequelize, DataTypes) => {
    const RunningTrack = sequelize.define('RunningTrack', {
      ExerciseType: DataTypes.STRING,
      ExerciseEquipment: DataTypes.STRING,
      Distance: DataTypes.NUMBER,
      Steps: DataTypes.NUMBER,
      Pace: DataTypes.NUMBER,
      RunningTime: DataTypes.NUMBER,
      AvgSpeed: DataTypes.NUMBER,
      MaxSpeed: DataTypes.NUMBER,
      AvgHRate: DataTypes.NUMBER,
      MaxHRate: DataTypes.NUMBER,
      Incline: DataTypes.NUMBER,
      Calories: DataTypes.NUMBER
    })
    return RunningTrack
  }