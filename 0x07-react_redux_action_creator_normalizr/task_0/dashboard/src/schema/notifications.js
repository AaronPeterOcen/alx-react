import * as jsonData from "../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return jsonData
    .filter((notification) => notification.author === userId)
    .map((notification) => notification.context);
}
