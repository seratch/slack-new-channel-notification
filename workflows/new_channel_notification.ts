import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const workflow = DefineWorkflow({
  callback_id: "new-channel-notification-workflow",
  title: "Notify new public channel creation",
  input_parameters: {
    properties: {
      channel_id: { type: Schema.slack.types.channel_id },
      channel_name: { type: Schema.types.string },
      channel_type: { type: Schema.types.string },
      creator_id: { type: Schema.slack.types.user_id },
      created: { type: Schema.types.string },
    },
    required: ["channel_id", "creator_id"],
  },
});

workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: "C014GJXUEM6", // TODO: edit this parameter
  message:
    `Hey, <@${workflow.inputs.creator_id}> created a new public channel: <#${workflow.inputs.channel_id}> :tada:`,
});

export default workflow;
