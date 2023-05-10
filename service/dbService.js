const postService = require("../service/postService");
const tagService = require("../service/tagService");
const postTagService = require("../service/postTagService");
const { posts, tags } = require("../data");
const { getRandom } = require("../utils/myHelper");
const TagModel = require("../model/TagModel");
const { Sequelize } = require("sequelize");
const PostTagModel = require("../model/PostTagModel");

// function definition
const insertData = async () => {
  try {
    // deleting all post tags first
    await postTagService.destroyPostTag();

    // looping over each tags, and upserting
    for (const tag of tags) {
      await tagService.upsertTags(tag, { name: tag.name });
    }

    // looping over each posts
    for (const post of posts) {
      // upserting each post
      const postObj = await postService.upsertPosts(post, {
        title: post.title,
      });

      // randomly generating a number
      const limit = await getRandom();

      // getting randomly generate tags by limit
      const tags = await tagService.getRandomTags(limit);

      // looping over tags, and upserting post tags
      for (const tag of tags) {
        await postTagService.upsertPostTags(
          {
            tagId: tag.id,
            postId: postObj.id,
          },
          {
            tagId: tag.id,
            postId: postObj.id,
          }
        );
      }
    }

    // if success, it will show Data Inserted
    console.log("Data Inserted.");
  } catch (e) {
    // else error
    console.log(e);
  } finally {
    // finally exit
    process.exit();
  }
};

// calling this function
insertData();

// exporting module
module.exports = {
  insertData,
};
