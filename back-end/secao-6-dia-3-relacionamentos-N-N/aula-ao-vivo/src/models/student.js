/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const StudentModel = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER,
  }, {
    tableName: 'students', // tabela onde irá procurar os dados
    underscored: true,
    timestamps: false,
  });

  StudentModel.associate = (models) => {
    StudentModel.belongsTo(models.Course, {
      foreignKey: 'idCourse',
      as: 'course',
    })
  }

  return StudentModel;
};