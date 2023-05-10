const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const { check_connection, db } = require("./database/config");
const PostModel = require("./model/PostModel");
const TagModel = require("./model/TagModel");
const PostTagModel = require("./model/PostTagModel");
require("dotenv").config();

// create express app
const app = express();

// enable cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// db connection
check_connection();

// defining relationship
// posts can have many tags
PostModel.belongsToMany(TagModel, { through: PostTagModel });
// tags can belongs to many posts
TagModel.belongsToMany(PostModel, { through: PostTagModel });

// start method
const start = async () => {
  try {
    // Synchronize the models with the database
    await db.sync({ force: false });
    console.log("Database synchronized");

    // post routes
    app.use("/api/posts", postRoutes);

    // port
    const PORT = process.env.PORT || 3000;

    // listening at port
    app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
  } catch (err) {
    // if error
    console.error("Unable to synchronize the database:", err);
  }
};

// calling this function
start();
