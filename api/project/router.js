// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res, next) => {
  Project.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const project = req.body;

  await Project.addProject(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;