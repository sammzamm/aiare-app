exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          other_photo_1: '',
          other_photo_2: '',
          other_photo_3: '',
          photos_id: 1
        },
        {
          id: 2,
          other_photo_1: '',
          other_photo_2: '',
          other_photo_3: '',
          photos_id: 2
        },
        {
          id: 3,
          other_photo_1: '',
          other_photo_2: '',
          other_photo_3: '',
          photos_id: 3
        }
      ]);
    });
};
