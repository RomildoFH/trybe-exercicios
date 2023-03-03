/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
  
  const ModuleTable = sequelize.define(
    'Module',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.DECIMAL,
      qtBlock: DataTypes.DECIMAL,
    },
    {
      timestamps: false,
      tableName: "Modules",
    },
  );

  return ModuleTable;
};