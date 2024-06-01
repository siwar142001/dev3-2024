const User = require("../models/user_model");
const Notifications = require("../models/notification_model");
const Space = require("../models/space_model");
const Categorie = require("../models/categorie_model");

const get_all_statics = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const notificationsCount = await Notifications.countDocuments();
    const spaceCount = await Space.countDocuments();
    const categorieCount = await Categorie.countDocuments();
    
    res
      .status(200)
      .json({ userCount, notificationsCount, spaceCount, categorieCount });
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};
module.exports = { get_all_statics };