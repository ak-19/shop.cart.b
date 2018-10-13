import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART,
        RESTORE_CART_FROM_LOCALSTORAGE_IF_EXISTS,
        CLEAR_CART} from '../actions/types';

const defaultState = {
  items: [],
  total: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return addCartToLocalStorage(addItemToCart(state, action));
    case DELETE_ITEM_FROM_CART:
      return addCartToLocalStorage(deleteItemAndReturnNewState(state, action));
    case INCREASE_ITEM_QUANTITY_IN_CART:
      return addCartToLocalStorage(increaseItemQuantity(state, action));
    case DECREASE_ITEM_QUANTITY_IN_CART:
      return addCartToLocalStorage(decreaseItemQuantity(state, action));
    case RESTORE_CART_FROM_LOCALSTORAGE_IF_EXISTS:
      return restoreCartFromLocalstorageIfExists();
    case CLEAR_CART:
      return clearCartFromLocalStorage ({ items: [], total: 0 })
    default:
      return {...state}
  }
}

function clearCartFromLocalStorage(cart) {
  localStorage.clear();
  return cart;
}

function addCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart;
}

function restoreCartFromLocalstorageIfExists() {
  const cart = JSON.parse(localStorage.getItem('cart'))
               || {
                 items: [],
                 total: 0
               };
  return cart;
}

function increaseItemQuantity(state, action){
  const id = action.payload;
  const founditem = state.items.find(i => i.productId === id);
  let {total} = state;
  if (founditem) {
    founditem.count++;
    founditem.total+= founditem.price;
    total += founditem.price;
  }

  return {
    ...state,
    items: [...state.items],
    total
  };
}

function decreaseItemQuantity(state, action){
  const id = action.payload;
  const founditemIndex = state.items.findIndex(i => i.productId === id);
  let {total} = state;
  if (founditemIndex !== -1) {
    const founditem = state.items[founditemIndex];
    founditem.count--;
    founditem.total -= founditem.price;
    total -= founditem.price;
    if (founditem.count < 1) {
      state.items.splice(founditemIndex, 1);
    }

    total = Math.max(0, total)
  }

  return {
    ...state,
    items: [...state.items],
    total
  };
}

function addItemToCart(state, action){
  const item = action.payload;
  const founditem = state.items.find(i => i.productId === item.productId);
  let total = state.total;
  if(founditem){
    founditem.count++;
    founditem.total+= item.price;
  }else{
    state.items.push({productId: item.productId, name: item.name, count: 1, price: item.price, total: item.price});
  }
  total += item.price;
  return {
    ...state,
    items: [...state.items],
    total
  };
}

function deleteItemAndReturnNewState(state, action){
  const id = action.payload;
  const items =  state.items.filter(item => item.productId !== id);
  const total = items.reduce((prev, curr) => prev + curr.price * curr.count, 0);
  return {
    ...state,
    items,
    total
  }
}
