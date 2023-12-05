// hooks/usePostMutation.js
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import {
  createProfile,
  deleteProfile,
  signupUser,
  updateProfile,
} from "src/services";

export function useCustomMutation() {
  const createUserMutation = useMutation(signupUser, {
    onError: (error: any) => {
      toast.error(error);
    },
  });

  const createProfileMutation = useMutation(createProfile, {
    onError: (error: any) => {
      toast.error(error);
    },
  });

  const updateProfileMutation = useMutation(updateProfile, {
    onError: (error: any) => {
      toast.error(error);
    },
  });

  const deleteProfileMutation = useMutation(deleteProfile, {
    onError: (error: any) => {
      toast.error(error);
    },
  });

  return {
    createUserMutation,
    createProfileMutation,
    updateProfileMutation,
    deleteProfileMutation,
  };
}
