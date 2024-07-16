const { Project } = require("../models/index");

const projectController = {
  findAllProjects: async (req, res) => {
    const projects = await Project.findAll();
    projects.forEach((project) => console.log(project.toJSON()));
  },
  findOneProject: async (req, res) => {
    const project = await Project.findByPk(req.params.id);
    console.log(project.toJSON());
  },
  createOneProject: async (req, res) => {
    const project = await Project.create(req.body);
    console.log(project.toJSON());
  },
  modifyOneProject: async (req, res) => {
    const project = await Project.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
  },
  deleteOneProject: async (req, res) => {
    const project = await Project.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  },
};

module.exports = projectController;
