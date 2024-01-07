import { Manifest } from "deno-slack-sdk/mod.ts";
import NewChannelNotification from "./workflows/new_channel_notification.ts";

export default Manifest({
  name: "New Channel Notification",
  description: "Notify new public channel creation",
  icon: "assets/default_new_app_icon.png",
  workflows: [
    NewChannelNotification,
  ],
  botScopes: [
    "commands",
    "channels:read",
    "chat:write",
    "chat:write.public",
  ],
});
