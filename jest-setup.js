module.exports = async () => {
  global.testServer = await require("./backend/server");
};
