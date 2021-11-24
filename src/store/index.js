import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/user"
import categoryReducer from "./reducers/category"

export default configureStore({
  reducer: {
      user:userReducer,
      category:categoryReducer
  }
})
