import { Types } from "mongoose";

// sign up type
export type TSignup = {
  email: string;
  password: string;
  rePassword: string;
};

// sign in type
export type TSignin = {
  email: string;
  password: string;
};

// profile type
export interface IProfile {
  _id?: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: Date;
  category: string;
  amenities: string[];
  rules: string[];
}
