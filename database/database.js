const models = require('./models');

const addPlaylist = ({
  songname,
  artist,
  score,
  polarity,
  playlistname,
}) => {
  const playlist = new models.Playlist({
    name: playlistname,
  });
  let songId;
  return models.Song.find({
    polarity: 'positive',
    // artist,
  }).then((songs) => {
    console.log(songs);
    // songId = songs[0]._id;
    playlist.songs.push(songs[0]._id);
    console.log(playlist.songs);
    return playlist.save();
  });
};

const getPlaylists = () => {
  return models.Playlist.find({})
    .then((playlists) => {
      return playlists.map(({
        songs,
        name,
      }) => {
        return {
          songs: Array.from(songs),
          name,
        };
      });
    })
    .then((playlists) => {
      return playlists.map(({
        songs,
        name,
      }) => {
        return {
          songs: songs.map((songId) => {
            return models.Song.find({
              _id: songId,
            }).then(song => song);
          }),
          name,
        };
      });
    });
  // .then((playlists) => {
  //   return playlists.map(({ songs, name }) => {
  //     return {
  //       songs: songs.map((song) => {
  //         r
  //       }),
  //       name,
  //     };
  //   });
  // });
};

const songToPlaylist = ({ playlistName, songName, artistName }) => {
  models.Playlist.find({
    name: playlistName,
  }).then((playlists) => {
    let foundSong;
    models.Song.find({
      songname: songName,
      artist: artistName,
    }).then((songs) => {
      foundSong = songs[0]._id;
    });
    setTimeout(() => {
      playlists[0].songs.push(foundSong);
      playlists[0].save();
    }, 500);
  });
};
// addPlaylist();

module.exports.addPlaylist = addPlaylist;
module.exports.getPlaylists = getPlaylists;
module.exports.songToPlaylist = songToPlaylist;
