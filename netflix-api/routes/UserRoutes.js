
const { addToLikedMovies, getLikedMovies,removeMovieFromLiked } = require("../controllers/UserController");

const router=require("express").Router();

router.post("/add",addToLikedMovies);
router.get("/liked/:email",getLikedMovies);
router.put("/delete",removeMovieFromLiked);

module.exports=router;