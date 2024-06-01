const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller_notification = require("../controllers/notification_ctrl");

router.get("/", controller_notification.get_notifications);
router.post("/", controller_notification.post_notifications);
router.get(
  "/allNotification",

  controller_notification.get_notifications_per_user
);


router.put(
  "/updateNotification/:id",
  controller_notification.mark_as_read
);
module.exports = router;
