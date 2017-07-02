exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function() {
      // Inserts seed entries
      return knex('photos').insert([{
          id: 1,
          other_photo_1: 'http://www.tinabsides.com/media/lori-skiing-sepp-mallaun.jpg',
          other_photo_2: 'http://sickstickz.com/blog/wp-content/uploads/2011/10/skiing.jpg',
          other_photo_3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmKjqwYRmS7o5dzdH7ZuTxmLlHkTheySzUKJaVhW7KxmLSy0x',
          photos_id: 1
        },
        {
          id: 2,
          other_photo_1: 'http://www.tinabsides.com/media/lori-skiing-sepp-mallaun.jpg',
          other_photo_2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9OhBh0pn9SBjK5jxIAMbSazhU5wW_L0lbja7AgX4UwaZryNq',
          other_photo_3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFif4KfLGXGSI2GxFJxxJ1e87DMcUGLjzf3WBjBbea9PTZZFtZ',
          photos_id: 2
        },
        {
          id: 3,
          other_photo_1: 'http://www.tinabsides.com/media/lori-skiing-sepp-mallaun.jpg',
          other_photo_2: 'http://sickstickz.com/blog/wp-content/uploads/2011/10/skiing.jpg',
          other_photo_3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzo0ZGL7ZytkD-1-uhbRYNTAbItjSYXs53RwPKqII3NR0YEPF',
          photos_id: 3
        }
      ]);
    });
};
