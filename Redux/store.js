import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import cartItemsReducer from './Reducers/cartItem';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer
  },
  middleware: [thunkMiddleware],
  //devTools: process.env.NODE_ENV !== 'production',
});

export default store;


// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// import cartItems from './Reducers/cartItem'

// const reducers = combineReducers({
//     cartItems: cartItems
// })

// const store = createStore(
//     reducers,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
// )

// export default store;