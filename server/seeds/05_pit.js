exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([{
          id: 1,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: true,
          pit_slide_body_weight: false,
          pit_slide_jump: false,
          pit_photo: 'https://befitapps.com/wp-content/uploads/2015/12/avigeek-snowpit-tignes.jpg',
          pit_id: 1
        },
        {
          id: 2,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: true,
          pit_slide_body_weight: false,
          pit_slide_jump: false,
          pit_photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwijuPrTudzUAhVl4IMKHfPXDYUQjBwIBA&url=http%3A%2F%2Fmooseradio.com%2Ffiles%2F2011%2F02%2FRott_-Bkmore-pit_MARKED.jpg&psig=AFQjCNGkcNZ7flgvlY9Ig-wnn8oEXp3xvA&ust=1498598731747356',
          pit_id: 2
        },
        {
          id: 3,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: false,
          pit_slide_body_weight: false,
          pit_slide_jump: true,
          pit_photo: 'http://www.mtavalanche.com/sites/default/files/images/N%20Bridger%20Snowpit.preview.jpg',
          pit_id: 3
        }
      ]);
    });
};
