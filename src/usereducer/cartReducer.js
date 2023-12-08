export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products, total: payload.total };
    default:
      throw new Error("Unhandled action type in cartReducer");
  }
};