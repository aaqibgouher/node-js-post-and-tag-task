// tags data
const tags = [
  { name: "python" },
  { name: "javascript" },
  { name: "cloud" },
  { name: "aws" },
  { name: "programming" },
  { name: "software engineering" },
  { name: "engineering" },
  { name: "database" },
];

// posts data
const posts = [
  {
    title: "Post 1",
    description: "This is the 1 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 2",
    description: "This is the 2 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 3",
    description: "This is the 3 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 4",
    description: "This is the 4 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 5",
    description: "This is the 5 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 6",
    description: "This is the 6 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 7",
    description: "This is the 7 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 8",
    description: "This is the 8 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 9",
    description: "This is the 9 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 10",
    description: "This is the 10 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 11",
    description: "This is the 11 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 12",
    description: "This is the 12 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 13",
    description: "This is the 13 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 14",
    description: "This is the 14 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 15",
    description: "This is the 15 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 16",
    description: "This is the 16 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 17",
    description: "This is the 17 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 18",
    description: "This is the 18 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 19",
    description: "This is the 19 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 20",
    description: "This is the 20 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 21",
    description: "This is the 21 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 22",
    description: "This is the 22 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 23",
    description: "This is the 23 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 24",
    description: "This is the 24 post. update",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 25",
    description: "This is the 25 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 26",
    description: "This is the 26 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 27",
    description: "This is the 27 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 28",
    description: "This is the 28 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 29",
    description: "This is the 29 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 30",
    description: "This is the 30 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Post 31",
    description: "This is the 31 post",
    image:
      "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

module.exports = {
  tags,
  posts,
};
