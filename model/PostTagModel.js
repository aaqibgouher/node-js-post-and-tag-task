const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../database/config");
const PostModel = require("./PostModel");
const TagModel = require("./TagModel");

// defining post tag model with post id (post model pk) and tag id (tags model pk)
const PostTagModel = db.define(
  "post_tag",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    postId: {
      type: DataTypes.UUID,
      references: {
        model: PostModel,
        key: "id",
      },
    },
    tagId: {
      type: DataTypes.UUID,
      references: {
        model: TagModel,
        key: "id",
      },
    },
  },
  { tableName: "post_tags" }
);

// exporting module
module.exports = PostTagModel;
