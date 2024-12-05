const router = require("express").Router();
const Album = require("../models/Album.model");

//Routes to be done :
//GET ONE ALBUM,
router.get("/albums/:albumId", async (req, res) => {
  try {
    const oneAlbum = await Album.findById(req.params.albumId);
    res.status(200).json(oneAlbum);
  } catch (err) {
    (err) => next(err);
  }
});

//GET 10 RANDOM ALBUMS THAT ARE NOT IN COLLECTION,
router.get("/albums/random", async (req, res) => {
  try {
    const randomAlbums = await Album.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(randomAlbums);
  } catch (err) {
    (err) => next(err);
  }
});

//Exports
module.exports = router;
