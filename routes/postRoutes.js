const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

// get all posts route, calling getPosts function in postController
router.get("/", postController.getPosts);
// search route, calling searchKeyword function in postController
router.get("/search", postController.searchKeyword);
// get posts from togs, calling filterPostsFromTags function in postController
router.get("/posts-from-tags", postController.filterPostsFromTags);

// export router
module.exports = router;
