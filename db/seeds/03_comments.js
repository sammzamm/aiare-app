
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
        id: 1,
        body: "Any facet layers?",
        observational_data_id: 1,
        user_id: 2,
        post_time:
      },
      {
        id: 2,
        body: "Would you expect that approach to still be a viable option?",
        observational_data_id: 1,
        user_id: 1,
        post_time:
      },
      {
        id: 3,
        body: "Was the coffee good?",
        observational_data_id: 2,
        user_id: 2,
        post_time:
      },
      {
        id: 4,
        body: "How long did that pit take to dig?",
        observational_data_id: 3,
        user_id: 3,
        post_time:
      },
      {
        id: 5,
        body: "Watch out for gumbies out there!",
        observational_data_id: 3,
        user_id: 2,
        post_time:
      },
      {
        id: 6,
        body: "If you drink enough scotch you'll never get cold.",
        observational_data_id: 4,
        user_id: 2,
        post_time:
      },
      {
        id: 7,
        body: "Want to make some turns sometime?",
        observational_data_id: 6,
        user_id: 2,
        post_time:
      }
      ]);
    }).then(() => {
      return knex.raw("select setval('comments_id_seq', (select max(id) from comments));")
};
