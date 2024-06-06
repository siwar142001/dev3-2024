const Notifications = require("../models/notification_model");
const get_notifications = async (req, res) => {
  try {
 
    const unreadNotifications = await Notifications.find({read:false}).limit(3);

    const unreadNotificationsCount = await Notifications.countDocuments({read:false});

    res.status(200).json({ unreadNotifications, unreadNotificationsCount });
  } catch (err) {
    console.error(err);
    resizeBy.status(500).json({ msg: "Internal server error" });
  }
};

const mark_as_read = async (req, res) => {
  try {
    const id = req.params.id;
    await Notifications.findOneAndUpdate(
      { _id: id },
      {
        read: true,
      }
    );
    res.status(200).json({ msg: "Notification is readed" });
  } catch (err) {
    console.error(err.message);
  }
};

const mark_as_unread = async (req, res) => {
  try {
    const id = req.params.id;
    await Notifications.findOneAndUpdate(
      { _id: id },
      {
        read: false,
      }
    );
    res.status(200).json({ msg: "Notification is readed" });
  } catch (err) {
    console.error(err.message);
  }
};

const get_notifications_per_user = async (req, res) => {
  try {
  
    const unreadNotifications = await Notifications.find({}).sort({ read: 1 });

    res.status(200).json(unreadNotifications);
  } catch (err) {
    console.error(err.message);
  }
};
const post_notifications = async (req, res) => {
  try {
    const notificationData = {
      content: req.body.content,
      type: req.body.type,
      userId: req.body.userId,
      read: req.body.read,
    };

    const newNotification = new Notifications(notificationData);
    await newNotification.save();

    res.status(201).json(newNotification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  get_notifications,
  mark_as_read,
  get_notifications_per_user,
  post_notifications,
  mark_as_unread
};
