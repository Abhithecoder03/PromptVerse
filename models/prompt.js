import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    prompt: {
        required: [true, "prompt required"],
        type: String,
    },
    tag: {
        type: String,
        required: [true, 'tag is required']

    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;