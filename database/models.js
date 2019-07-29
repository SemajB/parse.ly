const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const { ObjectId } = mongoose.Schema.Types;

mongoose.connect('mongodb://localhost:27017/parsely', { useNewUrlParser: true }).catch((err) => {
  console.log('Having trouble with Database => ', err.message);
});

const songSchema = new mongoose.Schema({
  songname: String,
  artistname: String,
  score: Number,
  polarity: String,
  youtubelink: String,
});
songSchema.plugin(findOrCreate);
const Song = mongoose.model('Song', songSchema);

const userSchema = new mongoose.Schema({
  username: String,
  userid: Number,
});

const playlistSchema = new mongoose.Schema({
  name: String,
  songs: [ObjectId],
});

const User = mongoose.model('User', userSchema);
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = {
  Song,
  User,
  Playlist,
};
