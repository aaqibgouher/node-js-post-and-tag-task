const { Sequelize } = require("sequelize");
const { tags } = require("../data");
const PostModel = require("../model/PostModel");
const TagModel = require("../model/TagModel");

// function definition
const upsertTags = async (data, condition) => {
  //   return TagModel.findOne({ where: condition }).then((obj) => {
  //     if (obj) return obj.update(data);
  //     else return TagModel.create(data);
  //   });

  //   finding each tags by condition name
  const obj = await TagModel.findOne({ where: condition });
  //   if obj found
  if (obj) {
    // updating it
    const updatedObj = await obj.update(data);
    // returning updated object
    return updatedObj;
  }
  //   else
  else {
    // creating new tag
    const createdObj = await TagModel.create(data);
    // returnig new tag
    return createdObj;
  }
};

// function definition
const getRandomTags = async (limit) => {
  // returns random tags by limit
  return await TagModel.findAll({
    raw: true,
    order: Sequelize.literal("rand()"),
    limit,
  });
};

// exporting modules
module.exports = {
  upsertTags,
  getRandomTags,
};
