import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
  email: {
    type: String,
    required: [true,"Email is required!"],
    unique: [true, "Email already exists!"],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        match: [/^(?=.{8,20}$)[a-zA-Z0-9]+$/],
    },
    image: {
        type: String,
        default: "/assets/images/default-profile.png",
    }
});

const User = models.User || model("User", userSchema);

export default User;

