const { db } = require("../database/config");
const { DataTypes } = require("sequelize");

// defining post model with id, title, description and image fields
const PostModel = db.define("posts", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// exporting modules
module.exports = PostModel;
