// function definition
const getRandom = async () => {
  // return random number between 1 and 3
  return Math.floor(Math.random() * 3) + 1;
};

// exporting module
module.exports = {
  getRandom,
};
