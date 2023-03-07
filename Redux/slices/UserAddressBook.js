import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAddressBook = createAsyncThunk(
  "user/addressBook",
  async (arg, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");

      const response = await axios.get(`${API_URL}/mobile/users/address/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addAddress = createAsyncThunk(
  "user/addressBook/add",
  async (newAddress, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");
      const response = await axios.post(
        `${API_URL}/mobile/users/address/single/${userId}`,
        newAddress,
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

export const updateAddress = createAsyncThunk(
    "user/addressBook/update",
    async (newAddress, { rejectWithValue }) => {
      try {
        const userId = await AsyncStorage.getItem("USERID");
        const response = await axios.put(
          `${API_URL}/mobile/users/address/single/update/${userId}`,
          newAddress,
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

export const removeAddress = createAsyncThunk(
  "user/addressBook/remove",
  async (address, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");

      const response = await axios.put(
        `${API_URL}/mobile/users/address/single/${userId}`,
        address,
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
  loadingAddressBook: false,
  loadingAddAddress: false,
  addressBook: {},
  errorAddressBook: null,
  errorAddAddress: null,
};

const UserAddressBook = createSlice({
  name: "addressBook",
  initialState,
  reducers: {
    clearLoginErrors: (state, action) => {
      state.errorLogin = null;
    },
    clearLogoutErrors: (state, action) => {
      state.errorLogout = null;
    },
    clearRegisterErrors: (state, action) => {
      state.errorRegister = null;
    },
    clearSuccess: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddressBook.pending, (state, action) => {
        state.loadingAddressBook = true;
      })
      .addCase(getAddressBook.fulfilled, (state, action) => {
        state.loadingAddressBook = false;
        state.addressBook = action.payload.addressBook;
      })
      .addCase(getAddressBook.rejected, (state, action) => {
        state.loadingAddressBook = false;
        state.errorAddressBook = action.payload;
      })
      .addCase(addAddress.pending, (state, action) => {
        state.loadingAddressBook = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loadingAddressBook = false;
        state.addressBook = action.payload.addressBook;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loadingAddressBook = false;
        state.errorAddressBook = action.payload;
      })
      .addCase(updateAddress.pending, (state, action) => {
        state.loadingAddressBook = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.loadingAddressBook = false;
        state.addressBook = action.payload.addressBook;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loadingAddressBook = false;
        state.errorAddressBook = action.payload;
      })
      .addCase(removeAddress.pending, (state, action) => {
        state.loadingAddressBook = true;
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.loadingAddressBook = false;
        state.addressBook = action.payload.addressBook;
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.loadingAddressBook = false;
        state.errorAddressBook = action.payload;
      });
  },
});

export const {} = UserAddressBook.actions;

export default UserAddressBook.reducer;
