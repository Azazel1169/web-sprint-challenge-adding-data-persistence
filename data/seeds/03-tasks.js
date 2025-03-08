const tasks = [
    {
      task_id: 1,
      task_description: "drink water",
      task_notes: "hydrate please",
      task_completed: false,
      project_id: 1,
    },
    {
      task_id: 2,
      task_description: "don't forget to stretch",
      task_notes: "it's good for the body",
      task_completed: false,
      project_id: 2,
    },
  ];
  
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("tasks").truncate();
    await knex("tasks").insert(tasks);
  };