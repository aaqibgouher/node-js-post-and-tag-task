const express = require("express");
const Sequelize = require("sequelize");

// connecting with the db
const db = new Sequelize("idea_usher_db", "root", "", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

// checking the connection
const check_connection = async () => {
  try {
    // if calling authenticate, if true connection established else unable to connect
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.error("Unable to connect to the database", e);
  }
};

module.exports = {
  db,
  check_connection,
};
