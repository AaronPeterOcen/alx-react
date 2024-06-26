import * as jsonData from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(jsonData, [notification]);

export default function getAllNotificationsByUser(userId) {
  return jsonData
    .filter((notification) => notification.author === userId)
    .map((notification) => notification.context);
}

export { normalized };
