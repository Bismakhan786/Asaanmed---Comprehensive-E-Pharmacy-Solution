import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";

export const getProductsFromAPI = createAsyncThunk(
  "products/getProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/products`
      );
      
      return response.data;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data.message);
    }
  }
);

// get details of single product (/products/:id)

export const getProductDetails = createAsyncThunk(
  "products/details",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/products/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


const initialState = {
  loadingProducts: false,
  loadingProductDetails: false,
  products: [],
  productCount: null,
  productDetails: null,
  errorLoadingProducts: null,
  errorProductDetails: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsFromAPI.pending, (state, action) => {
        state.loadingProducts = true;
      })
      .addCase(getProductsFromAPI.fulfilled, (state, action) => {
        state.productCount = action.payload.productCount;
        state.products = action.payload.products;
        state.loadingProducts = false;
      })
      .addCase(getProductsFromAPI.rejected, (state, action) => {
        state.loadingProducts = false;
        state.errorLoadingProducts = action.payload;
      })
      .addCase(getProductDetails.pending, (state, action) => {
        state.loadingProductDetails = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload.product;
        state.loadingProductDetails = false;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loadingProductDetails = false;
        state.errorProductDetails = action.payload;
      })
      ;
  },
});

export default ProductsSlice.reducer;
