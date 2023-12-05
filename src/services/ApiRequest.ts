import { TSignup, IProfile } from "src/types/types";
import { APiRequest } from "./inctance";

const signupUser = async (newUser: TSignup) => {
  try {
    const response = await APiRequest.post("/auth/signup", { newUser });
    return response;
  } catch (err: any) {
    throw err.response.data.error;
  }
};

const createProfile = async (newProfile: IProfile) => {
  try {
    const response = await APiRequest.post("/profile", { newProfile });
    return response;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

const updateProfile = async (newProfile: IProfile) => {
  try {
    const response = await APiRequest.patch("/profile", { newProfile });
    return response;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

const deleteProfile = async (id: string) => {
  try {
    const response = await APiRequest.delete(`/profile/delete/${id}`);

    return response;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

const getProfile = async () => {
  try {
    const response = await APiRequest.get(`/profile`, {
      headers: {
        cache: "no-store",
      },
    });

    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export { signupUser, createProfile, updateProfile, deleteProfile, getProfile };
