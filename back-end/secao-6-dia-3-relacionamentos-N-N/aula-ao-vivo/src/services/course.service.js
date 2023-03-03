const { Course, Student, Module, sequelize } = require('../models')

const getAll = async () => {
  const courses = await Course.findAll({
    include: [
      {
        model: Student,
        as: 'students',
        // attributes: ['id']
      },
      {
        model: Module,
        as: 'modules',
        through: { attributes: [] } // remove o atributo do elemento de ligação
      }
    ]
  });
  return courses;
};

const getById = async (id, withStudent) => {
  const course = await Course.findByPk(id);
  if (withStudent) {
    const students = await Student.findAll({ where: { idCourse: course.id } });
    course.dataValues.students = students;
  }
  return course;
};

const create = async ({
  name,
  description,
  creationDate,
  active,
  duration,
  modules}) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const courseCreated = await Course.create({
        name,
        description,
        creationDate,
        active,
        duration,
      }, { transaction: t });
    
      const arrPromiseModule = modules.map((m) => Module.create(m, { transaction: t })); // criando módulos no db atraves do array modules passada como parâmetro - retornará um array de promises
      const arrModule = await Promise.all(arrPromiseModule); // armazena o array resolvido de promises
      await courseCreated.addModules(arrModule, { transaction: t });
      courseCreated.dataValues.modules = arrModule;
    
      return courseCreated; 
    })

    return result;
       
  } catch (error) {
    return { message: 'deu ruim!!'}
  }
};

const update = async (id, course) => {
  console.log(id, course);
  const updatedCourse = await Course.update(course, {
    where: { id },
  });
  if (!updatedCourse[0]) return null;
  return course;
};

const destroy = async (id) => {
  await Course.destroy({ where: { id } });

  return null;
};
module.exports = { getAll, getById, update, destroy, create };