// file: store.ts
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import FavouritesSlicer from './slices/FavouritesSlicer';
import ProductsSlice from './slices/ProductsSlice';
import CategoriesSlice from './slices/CategoriesSlice'
import UserSlice from './slices/UserSlice'
import VoucherSlice from './slices/VoucherSlice'
import OrdersSlice from './slices/OrdersSlice'
import UserAddressBook from './slices/UserAddressBook';


const reducer = {
    cartReducer: CartSlice,
    favReducer: FavouritesSlicer,
    products: ProductsSlice,
    categories: CategoriesSlice,
    vouchers: VoucherSlice,
    user: UserSlice,
    addressBook: UserAddressBook,
    orders: OrdersSlice
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

export default store;