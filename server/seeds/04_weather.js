exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weather').del()
    .then(function() {
      // Inserts seed entries
      return knex('weather').insert([{
          id: 1,
          forecast_low_temp: 18,
          forecast_high_temp: 28,
          forecast_sky_visibility: 'rowValue1',
          forecast_precipitation: 'rowValue1',
          forecast_wind: 'rowValue1',
          forecast_notes: 'rowValue1',
          actual_low_temp: 19,
          actual_high_temp: 28,
          actual_sky_visibility: 'cloudy, cumulous',
          actual_precipitation: 'rowValue1',
          actual_weather: 'low atmospheric stability.',
          actual_wind: 'average winds with constant winds around 20mph and gusts around 30mph',
          weather_id: 1
        },
        {
          id: 2,
          forecast_low_temp: 15,
          forecast_high_temp: 23,
          forecast_sky_visibility: 'low visibility',
          forecast_precipitation: 'snow throughout the day',
          forecast_wind: 'high winds around 30mph with gusts up to 50mph',
          forecast_notes: 'high winds with low visability and cold temps.  Steady snow throughout the day with accumulation under 4 inches.',
          actual_low_temp: -11,
          actual_high_temp: 2,
          actual_sky_visibility: 'visibility around 20-30 feet.',
          actual_precipitation: 'consistant light snow all day',
          actual_weather: 'high winds with snow and extremely cold temperatures.',
          actual_wind: 'as predicted and potentially around 100mph at the summit.',
          weather_id: 2
        },
        {
          id: 3,
          forecast_low_temp: 23,
          forecast_high_temp: 32,
          forecast_sky_visibility: 'rowValue1',
          forecast_precipitation: 'rowValue1',
          forecast_wind: 'rowValue1',
          forecast_notes: 'rowValue1',
          actual_low_temp: 25,
          actual_high_temp: 35,
          actual_sky_visibility: 'bluebird',
          actual_precipitation: 'none',
          actual_weather: 'Clear skies with little to no wind.',
          actual_wind: 'none to slight breeze',
          weather_id: 3
        }
      ]);
    });
};
