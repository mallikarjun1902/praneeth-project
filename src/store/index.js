import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/user"
import categoryReducer from "./reducers/category"
import productReducer from './reducers/product'

export default configureStore({
  reducer: {
      user:userReducer,
      category:categoryReducer,
      product:productReducer
  }
})
