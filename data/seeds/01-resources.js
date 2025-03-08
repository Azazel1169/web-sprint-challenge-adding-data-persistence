const resources = [
    {
      resource_id: 1,
      resource_name: "bloomtech witches and wizards",
      resource_description: "powerful resources to help us succeed",
    },
    {
      resource_id: 2,
      resource_name: "michael",
      resource_description: "a human AI assisstant",
    },
  ];
  
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("resources").truncate();
    await knex("resources").insert(resources);
  };