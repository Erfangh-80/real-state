import { Schema, Types, model, models } from "mongoose";
import { IProfile } from "src/types/types";

enum CategoryEnum {
  VILLA = "villa",
  APARTMENT = "apartment",
  STORE = "store",
  OFFICE = "office",
}

interface INewProfile extends Omit<IProfile, "userId"> {
  userId: Types.ObjectId;
}

const profileSchema = new Schema<INewProfile>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(CategoryEnum),
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Profile = models.Profile || model("Profile", profileSchema);
export default Profile;
