import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   orders: [],
   loading: false,
   purchased: false
};

const purchaseInit = (state) => {
   return updateObject(state, { purchased: false });
};

const purchaseStart = (state) => {
   return updateObject(state, { loading: true });
};

const purchaseSuccess = (state, action) => {
   const newOrder = updateObject(action.orderData, { id: action.orderId });
   return updateObject(state, {
      loading: true,
      purchased: true,
      orders: state.orders.concat(newOrder)
   });
};

const purchaseFail = (state) => {
   return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state) => {
   return updateObject(state, { loading: true });
};

const ordersSuccess = (state, action) => {
   return updateObject(state, { orders: action.orders, loading: false });
};

const ordersFail = (state) => {
   return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.PURCHASE_INIT:
         return purchaseInit(state);
      case actionTypes.PURCHASE_BURGER_START:
         return purchaseStart(state);
      case actionTypes.PURCHASE_BURGER_SUCCESS:
         return purchaseSuccess(state, action);
      case actionTypes.PURCHASE_BURGER_FAIL:
         return purchaseFail(state);
      case actionTypes.FETCH_ORDERS_START:
         return fetchOrdersStart(state);
      case actionTypes.FETCH_ORDERS_SUCCESS:
         return ordersSuccess(state, action);
      case actionTypes.FETCH_ORDERS_FAIL:
         return ordersFail(state);
      default:
         return state;
   }
};

export default reducer;