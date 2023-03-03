/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const CourseModule = sequelize.define('CouseModule',
  {},
  {
    timestamps: false,
    tableName: 'Courses_Modules',
    underscored: true,
  });

  CourseModule.associate = ({ Course, Module }) => {
    Course.belongsToMany(Module, {
      foreignKey: 'idCourse',
      otherKey: 'idModule',
      through: CourseModule,
      as: 'modules',
    });
    
    Module.belongsToMany(Course, {
      foreignKey: 'idModule',
      otherKey: 'idCourse',
      through: CourseModule,
      as: 'courses',
    });
  }
  return CourseModule;
};