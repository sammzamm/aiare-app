exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          first_name: 'Samuel',
          last_name: 'Miller',
          email: 'sammzamm01@gmail.com',
          hashed_password: '',
          city: 'Boulder',
          state: 'CO',
          profile_pic: 'http://taskexchange.cochrane.org/assets/default-profile-bfeeabd02c3b38305b18e4c2345fd54dbbd1a0a7bf403a31f08fca4fada50449.png'
        },
        {
          id: 2,
          first_name: 'Jonny',
          last_name: 'Carson',
          email: 'jonathan.carson@colorado.edu',
          hashed_password: '',
          city: 'Loveland',
          state: 'CO',
          profile_pic: 'http://taskexchange.cochrane.org/assets/default-profile-bfeeabd02c3b38305b18e4c2345fd54dbbd1a0a7bf403a31f08fca4fada50449.png'
        },
        {
          id: 3,
          first_name: 'Robert',
          last_name: 'Daniel',
          email: 'robd1189@gmail.com',
          hashed_password: '',
          city: 'Denver',
          state: 'CO',
          profile_pic: 'http://taskexchange.cochrane.org/assets/default-profile-bfeeabd02c3b38305b18e4c2345fd54dbbd1a0a7bf403a31f08fca4fada50449.png'
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};
