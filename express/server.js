const { sequelize } = require("./src/models");
const PORT = process.env.PORT || 3080;
const app = require("./src/app");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("🗄 Database connection success!");
  })
  .catch((err) => {
    console.error("🗄 Database connection Error! " + err);
  });



app.listen(PORT, () => {
  console.log(`🚀 server runnning - port ${PORT}`);
});
