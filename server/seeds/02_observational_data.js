exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('observational_data').del()
    .then(function() {
      // Inserts seed entries
      return knex('observational_data').insert([{
          id: 1,
          owner_id: 1,
          date_time: 'some_dateTime',
          location: 'RMNP',
          sub_region: 'McHenrys',
          aspect: 'South East Face',
          elevation: 12000,
          loose_dry: true,
          loose_wet: false,
          wet_slab: false,
          storm_slab: false,
          wind_slab: true,
          persistant_slab: false,
          deep_slab: false,
          cornice: true,
          fresh_snow: true,
          warming: false,
          weak_layers: 'Facets under the most recent layer.',
          snowpack: 'Facets under the most recent layer.',
          ideal_approach: 'Drop in from the summit of Snow Bench.  Approach from Glacier Gorge Trailhead.',
          backup_approach: 'Head up saddle to Stoneman Pass and click in.  Approach from Glacier Gorge Trailhead.',
          trip_report: 'Good time to Black Lake and cautious traversing under McHenrys peak to Snow Bench where we soloed to the ridgeline.  Winds were too agressive to summit so we dropped in on our line immediatly.  Sluff was light but fast with the pitch of the slope.',
          route_photo: ''
        },
        {
          id: 2,
          owner_id: 3,
          date_time: 'some_dateTime',
          location: 'RMNP',
          sub_region: 'Flattop Mtn',
          aspect: 'western',
          elevation: 11500,
          loose_dry: false,
          loose_wet: flase,
          wet_slab: false,
          storm_slab: true,
          wind_slab: true,
          persistant_slab: true,
          deep_slab: true,
          cornice: false,
          fresh_snow: false,
          warming: false,
          weak_layers: 'one identifiable layer of wind slab.',
          snowpack: '2 identifiable layers',
          ideal_approach: 'standard low angle approach to flattop summit',
          backup_approach: 'not necessary',
          trip_report: 'Left the Bear Lake Trailhead at 6am for 2 laps on flattop mtn, shortly after cleaning up Erics spilled coffee in my 3 day old elantra which apparently drives like a go-kart in snow.  Winds were horriffic and required that we had no exposed skin while traveling.  Dropped off of the western side and skied hard crust to treeline where we re-skinned the skis and took a second lap.  Eric wrapped up the day by making soup for us and spilling it on my previously immaculate seats.',
          route_photo: ''
        },
        {
          id: 3,
          owner_id: 2,
          date_time: 'some_dateTime',
          location: 'RMNP',
          sub_region: 'The Trough',
          aspect: 'east',
          elevation: 13500,
          slope_angle: 45;
          loose_dry: false,
          loose_wet: false,
          wet_slab: true,
          storm_slab: false,
          wind_slab: false,
          persistant_slab: false,
          deep_slab: false,
          cornice: false,
          fresh_snow: false,
          warming: true,
          weak_layers: false,
          snowpack: 'Snowpack is consolidated and layers are difficult to identify.  Wet slab is the most likely to trigger.',
          ideal_approach: 'Glacier Gorge Basin trailhead to ramp north/east of black lake.',
          backup_approach: 'not necessary',
          trip_report: 'Skinned in making good time to Black Lake where we re-upped on calories and re-assessed conditions.  Climbed the Trough, clicked in and ripped!  Small 10 foot drop near the bottom is no joke.  Make sure your legs are solid or you are guaranteed to eat rock.',
          route_photo: ''
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('observational_data_id_seq', (select max(id) from observational_data));")
    });
};
