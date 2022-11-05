import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, user);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, user);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const { data } = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
