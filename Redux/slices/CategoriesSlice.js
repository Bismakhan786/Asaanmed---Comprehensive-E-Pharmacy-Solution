import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";

export const getAllCategories = createAsyncThunk(
  "categories/get",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/products/get/categories`, {withCredentials: true}
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loadingCategories: false,
  categories: [],
  errorLoadingCategories: null,
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.loadingCategories = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.loadingCategories = false;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.errorLoadingCategories = action.payload;
      });
  },
});

export default CategoriesSlice.reducer;
