const Joi = require('joi');

const Playlist_PayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const PlaylistSong_PayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = { Playlist_PayloadSchema, PlaylistSong_PayloadSchema };
