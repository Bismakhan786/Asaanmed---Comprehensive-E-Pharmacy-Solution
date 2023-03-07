import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../common/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { schedulePushNotification } from "../../common/schedulePushNotification";

// create order (/orders/create)

export const placeOrder = createAsyncThunk(
  "orders/place",
  async (orderData, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");
      const response = await axios.post(
        `${API_URL}/orders/create/${userId}`,
        orderData,
        { withCredentials: true }
      );
      await schedulePushNotification({
        title: "Order has been placed successfully 🥳",
        body: "Order will be delivered in 24 hours. Browse to shop more 🚀",
      });
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

// get order details (/orders/order/:id)

export const getOrderDetails = createAsyncThunk(
  "orders/details",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/orders/order/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// cancel order (/orders/cancel/:id)

export const cancelOrder = createAsyncThunk(
  "orders/cancel",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/orders/cancel/${id}`, {
        withCredentials: true,
      });
      await schedulePushNotification({
        title: "Your order has been cancelled 🙃",
        body: "If you have any complain or confusion, we are here for you ⛑️",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// get all my orders (/orders/my)

export const getAllMyOrders = createAsyncThunk(
  "orders/my",
  async (arg, { rejectWithValue }) => {
    try {
      const userId = await AsyncStorage.getItem("USERID");
      const response = await axios.get(`${API_URL}/orders/my/${userId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  loadingOrderDetails: false,
  loadingMyOrders: false,
  cancelOrderLoading: false,
  placeOrderLoading: false,
  orderDetails: null,
  myOrders: [],
  placedOrder: null,
  cancelOrderSuccess: false,
  placeOrderSuccess: false,
  error: null,
  errorOrderDetails: null,
  errorMyOrders: null,
  cancelOrderError: null,
  placeOrderError: null,
};

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearPlaceOrderSuccess: (state, action) => {
      state.placeOrderSuccess = false;
    },
    clearPlaceOrderError: (state, action) => {
      state.placeOrderError = null;
    },
    clearCancelOrderSuccess: (state, action) => {
      state.cancelOrderSuccess = false;
    },
    clearCancelOrderError: (state, action) => {
      state.cancelOrderError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state, action) => {
        state.loadingOrderDetails = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.orderDetails = action.payload.order;
        state.loadingOrderDetails = false;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loadingOrderDetails = false;
        state.errorOrderDetails = action.payload;
      })
      .addCase(getAllMyOrders.pending, (state, action) => {
        state.loadingMyOrders = true;
      })
      .addCase(getAllMyOrders.fulfilled, (state, action) => {
        state.myOrders = action.payload.myOrders;
        state.loadingMyOrders = false;
      })
      .addCase(getAllMyOrders.rejected, (state, action) => {
        state.loadingMyOrders = false;
        state.errorMyOrders = action.payload;
      })
      .addCase(cancelOrder.pending, (state, action) => {
        state.loadingMyOrders = true;
        state.cancelOrderSuccess = false;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loadingMyOrders = false;
        state.myOrders = action.payload.myOrders;
        state.cancelOrderSuccess = true;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loadingMyOrders = false;
        state.cancelOrderError = action.payload;
        state.cancelOrderSuccess = false;
      })
      .addCase(placeOrder.pending, (state, action) => {
        state.loadingMyOrders = true;
        state.placeOrderLoading = true;
        state.placeOrderSuccess = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loadingMyOrders = false;
        state.myOrders = action.payload.myOrders;
        state.placeOrderLoading = false;
        state.placeOrderSuccess = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loadingMyOrders = false;
        state.placeOrderLoading = false;
        state.placeOrderError = action.payload;
      });
  },
});

export const {
  clearPlaceOrderError,
  clearPlaceOrderSuccess,
  clearCancelOrderError,
  clearCancelOrderSuccess,
} = OrdersSlice.actions;

export default OrdersSlice.reducer;
