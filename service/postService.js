const { Op } = require("sequelize");
const PostModel = require("../model/PostModel");
const TagModel = require("../model/TagModel");

// function definition
const getPosts = async (params = []) => {
  //   if filter, sort, page, limit, search, and tags exists in params & true, taking it else default
  const filter =
    params.hasOwnProperty("filter") && params.filter ? params.filter : "id";
  const sort =
    params.hasOwnProperty("sort") && params.sort ? params.sort : "ASC";
  const page =
    params.hasOwnProperty("page") && +params.page > 0 ? +params.page : 1;
  const limit =
    params.hasOwnProperty("limit") && +params.limit > 0 ? +params.limit : 100;
  const search =
    params.hasOwnProperty("search") && params.search ? params.search : "";
  const tags = params.hasOwnProperty("tags") && params.tags ? params.tags : [];

  //   creating condition and tag condition object
  let condition = {};
  let tagCondition = {};

  //   if search is true
  if (search) {
    // changing condition object, and adding condition for title and description by like
    condition = {
      ...condition,
      [Op.or]: [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } },
      ],
    };
  }

  //   if tags array is true, and length is true
  if (tags && tags.length) {
    // chanding tag condition object, and adding condition for name
    tagCondition = {
      ...tagCondition,
      name: {
        [Op.in]: tags,
      },
    };
  }

  // find and count all, taking count and rows
  const { count, rows } = await PostModel.findAndCountAll({
    // Returning only id, title, description and image
    attributes: ["id", "title", "description", "image"],
    // including Tags, having attribute id and name, also added where tag condition
    include: [
      {
        model: TagModel,
        attributes: ["id", "name"],
        as: "tags",
        through: { attributes: [] },
        where: tagCondition,
      },
    ],
    where: condition, // where condition
    order: [[filter, sort]], // order by column and asc/desc
    limit, // limit
    offset: (page - 1) * limit, // calculating offset
    distinct: true, // setting distinct to true
  });

  //   finding total pages
  const totalPages = Math.ceil(count / limit);

  //   creating result object
  const result = {
    results: rows,
    page,
    limit,
    filter,
    sort,
    total: count,
    totalPages,
  };

  //   return result
  return result;
};

// function definition, taking data and condition
const upsertPosts = async (data, condition) => {
  //   return PostModel.findOne({ where: condition }).then((obj) => {
  //     if (obj) return obj.update(data);
  //     else return PostModel.create(data);
  //   });
  //   finding each posts by condition name
  const obj = await PostModel.findOne({ where: condition });
  //   if obj found
  if (obj) {
    // updating it
    const updatedObj = await obj.update(data);
    // returning updated object
    return updatedObj;
  }
  //   else
  else {
    // creating new post
    const createdObj = await PostModel.create(data);
    // returnig new post
    return createdObj;
  }
};

// exporting modules
module.exports = {
  getPosts,
  upsertPosts,
};
