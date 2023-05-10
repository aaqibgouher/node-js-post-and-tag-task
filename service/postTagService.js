const PostTagModel = require("../model/PostTagModel");
const { getRandom } = require("../utils/myHelper");
const tagService = require("./tagService");
const postService = require("./postService");

// function definition
const getPostTags = async () => {
  // find all post tags, returnig only id, postId, and tagId
  const postTags = await PostTagModel.findAll({
    attributes: ["id", "postId", "tagId"], // replace with the fields you want to retrieve
    raw: true, // add this option to return only the data you want
  });

  //   returning data
  return postTags;
};

// function definition
const getRandomTags = async (tags, random) => {
  // creating random tags array
  let randomTags = [];
  //   looping over random number, and taking random tags and pushing back to randomTags arr
  for (let i = 0; i < random; i++) {
    let index = Math.floor(Math.random() * tags.length);
    randomTags.push(tags[index]);
  }

  //   returnig random tags arr
  return randomTags;
};

// function defnition
const upsertPostTags = async (data, condition) => {
  //   return PostTagModel.findOne({ where: condition }).then((obj) => {
  //     if (obj) return obj.update(data);
  //     else return PostTagModel.create(data);
  //   });

  //   finding each post tags by condition name
  const obj = await PostTagModel.findOne({ where: condition });
  //   if obj found
  if (obj) {
    // updating it
    const updatedObj = await obj.update(data);
    // returning updated object
    return updatedObj;
  }
  //   else
  else {
    // creating new post tags
    const createdObj = await PostTagModel.create(data);
    // returnig new post tags
    return createdObj;
  }
};

// function definition
const destroyPostTag = async () => {
  // destroying all post tags
  await PostTagModel.destroy({
    where: {},
    truncate: true,
  });
};

// exporting modules
module.exports = {
  getPostTags,
  getRandomTags,
  upsertPostTags,
  destroyPostTag,
};
