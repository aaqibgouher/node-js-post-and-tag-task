const myOutput = require("../utils/myOutput");
const postService = require("../service/postService");

// function definition
const getPosts = async (req, res) => {
  try {
    // taking filter, sort, page, limit from query
    let { filter, sort, page, limit, search } = req.query;

    // creating params
    let params = {
      filter,
      sort,
      page,
      limit,
      search,
    };

    // calling service getPosts, passing params
    let data = await postService.getPosts(params);

    // if get data, passing it on the responce with success message
    return await myOutput.success(res, "Successfully get the data", data);
  } catch (e) {
    // if any error
    console.log(e, "from post controller");
    return await myOutput.error(res, e);
  }
};

// function definition
const searchKeyword = async (req, res) => {
  try {
    // taking search from query
    let { search } = req.query;

    // creating params
    let params = {
      search,
    };

    // calling getPosts function in service file, and passing params
    let data = await postService.getPosts(params);

    // if get data, passing it on the responce with success message
    return await myOutput.success(res, "Successfully found a keyword", data);
  } catch (e) {
    // if any error
    console.log(e, "from post controller from search keyword method");
    return await myOutput.error(res, e);
  }
};

// function definition
const filterPostsFromTags = async (req, res) => {
  try {
    // taking tags from query, splitting string by comman, and making array
    let tags = req.query.tags ? req.query.tags.split(",") : [];

    // creating params object
    let params = { tags };

    // calling getPosts service file, passing params
    let data = await postService.getPosts(params);

    // if get data, passing it on the responce with success message
    return await myOutput.success(
      res,
      "Successfully get a posts from a tags",
      data
    );
  } catch (e) {
    // if error
    console.log(e, "from post controller from filter posts from tags");
    return await myOutput.error(res, e);
  }
};

// export modules
module.exports = {
  getPosts,
  searchKeyword,
  filterPostsFromTags,
};
