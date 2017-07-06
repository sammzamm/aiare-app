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
          city: 'Boulder',
          state: 'CO',
          profile_pic: 'https://cdn-files.apstatic.com/climb/113266469_medium_1499313760.jpg'
        },
        {
          id: 2,
          first_name: 'Jonny',
          last_name: 'Carson',
          email: 'jonathan.carson@colorado.edu',
          city: 'Loveland',
          state: 'CO',
          profile_pic: 'https://scontent.xx.fbcdn.net/v/t31.0-8/15800394_10209718361370634_5311348966395259236_o.jpg?oh=c270eb8d2a1664c720c89c8607c361b3&oe=59D28290'
        },
        {
          id: 3,
          first_name: 'Robert',
          last_name: 'Daniel',
          email: 'robd1189@gmail.com',
          city: 'Denver',
          state: 'CO',
          profile_pic: 'https://scontent.xx.fbcdn.net/v/t31.0-8/18595496_4871984122779_5687193950514546677_o.jpg?oh=48053d98d10218abcdbe11ef892b2b06&oe=5A11FA58'
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};
