const { db } = require("../database/config");
const { DataTypes } = require("sequelize");

// defining tag module, with name field
const TagModel = db.define("tags", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// exporting module
module.exports = TagModel;
