const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
    'postgres://esgi_cloud_exam_exo1_43928_user:7jjcD2tctLrtSayERLLGdN76KQvzk6Ry@dpg-ct03foggph6c73cdsg50-a:5432/esgi-cloud-exam-exo1-43928', // TODO

  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;