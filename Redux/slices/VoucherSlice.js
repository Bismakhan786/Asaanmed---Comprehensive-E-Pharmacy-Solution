import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";

export const getAllVouchers = createAsyncThunk(
  "vouchers/get",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/vouchers`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


// Get details of single voucher (/vouchers/:id)

export const getVoucherDetails = createAsyncThunk(
  "vouchers/get/details",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/vouchers/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loadingVouchers: false,
  loadingVoucherDetails: false,
  vouchers: [],
  voucherDetails: null,
  errorLoadingVouchers: null,
  errorVoucherDetails: null,
};

const VoucherSlice = createSlice({
  name: "vouchers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVouchers.pending, (state, action) => {
        state.loadingVouchers = true;
      })
      .addCase(getAllVouchers.fulfilled, (state, action) => {
        state.vouchers = action.payload.vouchers;
        state.loadingVouchers = false;
      })
      .addCase(getAllVouchers.rejected, (state, action) => {
        state.loadingVouchers = false;
        state.errorLoadingVouchers = action.payload;
      })
      .addCase(getVoucherDetails.pending, (state, action) => {
        state.loadingVoucherDetails = true;
      })
      .addCase(getVoucherDetails.fulfilled, (state, action) => {
        state.voucherDetails = action.payload.voucher;
        state.loadingVoucherDetails = false;
      })
      .addCase(getVoucherDetails.rejected, (state, action) => {
        state.loadingVoucherDetails = false;
        state.errorVoucherDetails = action.payload;
      })
      ;
  },
});

export default VoucherSlice.reducer;
