import { InferSchemaType, Model, Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

type TUser = InferSchemaType<typeof userSchema>;

// let User: Model<any, {}, {}, {}, any, any> | undefined;

// User = model("User") as Model<any, {}, {}, {}, any, any>;
// User = model<TUser>("User", userSchema);
const User = models.User || model<TUser>("User", userSchema);
export default User;
