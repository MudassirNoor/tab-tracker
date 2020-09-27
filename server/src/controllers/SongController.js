const { Song } = require('../models')

// Backend reqe
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
  }
}
