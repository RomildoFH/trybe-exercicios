/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 * @returns 
 */


module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER
  });

  Course.associate = (models) => {
    Course.hasMany(models.Student, { // Student é o nome da model conforme definido na mesma
      foreignKey: 'idCourse',
      as: 'students',
    })
  };

  return Course;
};