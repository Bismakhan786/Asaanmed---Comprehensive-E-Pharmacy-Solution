import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

// register (/mobile/users/register)

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("IN REGISTER USER")
      console.log(userData)
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = await axios.post(
        `${API_URL}/mobile/users/register`,
        userData,
        config
      );
      console.log(response)
      await AsyncStorage.setItem("USERID", response.data.user._id);
      await AsyncStorage.setItem("ONBOARDED", "true");
      return response.data;
    } catch (error) {
      console.log(error.response.data.message)
      return rejectWithValue(error.response.data.message);
    }
  }
);


// get profile (/mobile/users/me)

export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (arg, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");

      const response = await axios.get(`${API_URL}/mobile/users/me/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// update profile (/mobile/users/profile/update)

export const updateUserProfile = createAsyncThunk(
  "/user/update/profile",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const userId = await AsyncStorage.getItem("USERID");
      const response = await axios.put(
        `${API_URL}/mobile/users/profile/update/${userId}`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const getFavouriteItems = createAsyncThunk(
  "user/favourites",
  async (arg, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");

      const response = await axios.get(
        `${API_URL}/mobile/users/favourites/${userId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addFavItem = createAsyncThunk(
  "user/favourites/add",
  async (product, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");
      const response = await axios.post(
        `${API_URL}/mobile/users/favourites/item/${userId}`,
        product,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeFavItem = createAsyncThunk(
  "user/favourites/remove/single",
  async (product, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");

      const response = await axios.put(
        `${API_URL}/mobile/users/favourites/item/${userId}`,
        product,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loadingRegister: false,
  loadingGetProfile: false,
  loadingUpdateProfile: false,
  loadingFavItems: false,
  user: {},
  favouriteItems: {},
  getProfileSuccess: false,
  success: false,
  updateProfileSucces: false,
  removeFavItemMsg: null,
  errorFavItems: null,
  errorRegister: null,
  errorGetProfile: null,
  errorUpdateProfile: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    clearRegisterErrors: (state, action) => {
      state.errorRegister = null;
    },
    clearSuccess: (state, action) => {
      state.success = false;
    },
    clearUpdateProfileError: (state, action) => {
      state.errorUpdateProfile = null;
    },
    clearUpdateProfileSuccess: (state, action) => {
      state.updateProfileSucces = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loadingRegister = true;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loadingRegister = false;
        state.user = action.payload.user;
        state.success = true;
        state.errorRegister = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loadingRegister = false;
        state.errorRegister = action.payload;
        state.success = false;
      })
      
      .addCase(getUserProfile.pending, (state, action) => {
        state.loadingGetProfile = true;
        state.getProfileSuccess = false;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loadingGetProfile = false;
        state.user = action.payload.user;
        state.errorGetProfile = null;
        state.getProfileSuccess = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loadingGetProfile = false;
        state.errorGetProfile = action.payload;
        state.getProfileSuccess = false;
      })
      
      .addCase(updateUserProfile.pending, (state, action) => {
        state.loadingUpdateProfile = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loadingUpdateProfile = false;
        state.user = action.payload.user;
        state.errorUpdateProfile = null;
        state.updateProfileSucces = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loadingUpdateProfile = false;
        state.errorUpdateProfile = action.payload;
        state.updateProfileSucces = false;
      })
      .addCase(getFavouriteItems.pending, (state, action) => {
        state.loadingFavItems = true;
      })
      .addCase(getFavouriteItems.fulfilled, (state, action) => {
        state.loadingFavItems = false;
        state.favouriteItems = action.payload.favouriteItems;
      })
      .addCase(getFavouriteItems.rejected, (state, action) => {
        state.loadingFavItems = false;
        state.errorFavItems = action.payload;
      })
      .addCase(addFavItem.pending, (state, action) => {
        state.loadingFavItems = true;
      })
      .addCase(addFavItem.fulfilled, (state, action) => {
        state.loadingFavItems = false;
        state.favouriteItems = action.payload.favouriteItems;
      })
      .addCase(addFavItem.rejected, (state, action) => {
        state.loadingFavItems = false;
        state.errorFavItems = action.payload;
      })
      .addCase(removeFavItem.pending, (state, action) => {
        state.loadingFavItems = true;
      })
      .addCase(removeFavItem.fulfilled, (state, action) => {
        state.loadingFavItems = false;
        state.favouriteItems = action.payload.favouriteItems;
        state.removeFavItemMsg = action.payload.message;
      })
      .addCase(removeFavItem.rejected, (state, action) => {
        state.loadingFavItems = false;
        state.errorFavItems = action.payload;
      });
  },
});

export const {
  clearRegisterErrors,
  clearSuccess,
  clearUpdateProfileError,
  clearUpdateProfileSuccess
} = UserSlice.actions;

export default UserSlice.reducer;
