// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    "project_completed"
  );
  return projects.map((project) => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
}

async function addProject(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = await db("projects")
    .select(
      "project_id",
      "project_name",
      "project_description",
      "project_completed"
    )
    .where("project_id", project_id)
    .first();
  newProject.project_completed = Boolean(newProject.project_completed);
  return newProject;
}

module.exports = { getProjects, addProject };