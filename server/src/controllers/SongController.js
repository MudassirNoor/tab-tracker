const { Song } = require('../models')

// Backend request
module.exports = {
  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred while trying to create songs'
      })
    }
  },
  async getSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred while trying to fetch songs'
      })
    }
  },
  async showSong(req, res) {
    try {
      const song = await Song.findOne({
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: `An error has occurred while trying to fetch the song with id ${req.params.songId}`
      })
    }
  },
  async saveSong(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: `An error has occurred while trying to update the song with id ${req.params.songId}`
      })
    }
  }
}
