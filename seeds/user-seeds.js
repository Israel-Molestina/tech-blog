const { User } = require("../models");

const userData = [
  {
    username: "IzyFresh",
    password: "12345678",
  },
  {
    username: "Grapez",
    password: "12345678",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
