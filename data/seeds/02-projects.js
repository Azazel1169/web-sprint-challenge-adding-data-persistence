const projects = [
    {
      project_id: 1,
      project_name: "build api",
      project_description: "test your skills and knowledge",
      project_completed: false,
    },
    {
      project_id: 2,
      project_name: "build ANOTHER api",
      project_description:
        "after you're finished with the first one, move on to this one",
      project_completed: false,
    },
  ];
  
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("projects").truncate();
    await knex("projects").insert(projects);
  };