module.exports = (sequelize, DataTypes) => {
    const People = sequelize.define('People', {
      PersonId: DataTypes.NUMBER,
      PersonName: DataTypes.STRING,
      Address: DataTypes.STRING,
      City: DataTypes.STRING,
      State: DataTypes.STRING,
      Zip: DataTypes.NUMBER,
      Phone: DataTypes.NUMBER,
      Goal: DataTypes.STRING
    })
    return People
  }