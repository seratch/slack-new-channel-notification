import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import workflow from "../workflows/new_channel_notification.ts";

// https://api.slack.com/automation/triggers/event#supported-events
const trigger: Trigger<typeof workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Channel Creation Trigger",
  workflow: `#/workflows/${workflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.ChannelCreated,
    // If you're in an Enterprise Grid Organization,
    // you must pass team_ids to enable this workflow as well.
    // Check team_ids at https://app.slack.com/manage/{your_org_id_here}/workspaces/all
    // and list the IDs as below:
    // team_ids: ["T014GJXU940"],
  },
  inputs: {
    channel_id: { value: TriggerContextData.Event.ChannelCreated.channel_id },
    channel_name: {
      value: TriggerContextData.Event.ChannelCreated.channel_name,
    },
    channel_type: {
      value: TriggerContextData.Event.ChannelCreated.channel_type,
    },
    creator_id: { value: TriggerContextData.Event.ChannelCreated.creator_id },
    created: { value: TriggerContextData.Event.ChannelCreated.created },
  },
};

export default trigger;
