const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const testRestaurant = await Restaurant.create({
      name: "Rudys",
      location: "Manchester",
      cuisine: "Pizza",
    });
    expect(testRestaurant.name).toEqual("Rudys");
  });

  test("can create a Menu", async () => {
    // TODO - write test
    const testMenu = await Menu.create({
      title: "Dinner",
    });
    expect(testMenu.title).toEqual("Dinner");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    return Restaurant.destroy({
      where: {},
    }).then(() => {
      return Restaurant.findAll().then((restaurants) => {
        expect(restaurants.length).toEqual(0);
      });
    });
  });
});
