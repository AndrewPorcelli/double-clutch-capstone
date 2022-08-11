require('dotenv').config();
const { CONNECTION_STRING } = process.env;
// const Sequelize = require('sequelize');

const { Sequelize } = require('sequelize');

// console.log(process.env);

// // you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(
  'postgres://weyhvojgvzyycn:13feaa6b8a2f09dcdac454902e049752e2bbae1fbe00429b8fdc6b741ce280b2@ec2-44-208-88-195.compute-1.amazonaws.com:5432/d7p6lmhvmf2hpj',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

// const sequelize = new Sequelize(
//   'postgres://weyhvojgvzyycn:13feaa6b8a2f09dcdac454902e049752e2bbae1fbe00429b8fdc6b741ce280b2@ec2-44-208-88-195.compute-1.amazonaws.com:5432/d7p6lmhvmf2hpj'
// );

function getReviews(req, res) {
  sequelize
    .query(
      `
      SELECT * FROM reviewed_cars;
      `
    )
    .then((dbRes) => {
      //   console.log(dbRes);
      console.log(dbRes[0]);
      res.status(200).send(dbRes[0]);
    });
}

// getReviews();

module.exports = {
  getReviews,
};
