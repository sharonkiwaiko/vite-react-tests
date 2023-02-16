import React, { useReducer } from "react";

const initialCartState = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload];
      const newTotal = state.total + action.payload.price;
      return {
        ...state,
        items: newItems,
        total: newTotal,
      };
    case "REMOVE_ITEM":
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const removedItem = state.items[itemIndex];
      const remainingItems = [...state.items];
      remainingItems.splice(itemIndex, 1);
      const newCartTotal = state.total - removedItem.price;
      return {
        ...state,
        items: remainingItems,
        total: newCartTotal,
      };
    case "CLEAR_CART":
      return initialCartState;
    default:
      return state;
  }
}

function ReducerApp() {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const handleAddToCart = (item) => {
    cartDispatch({ type: "ADD_ITEM", payload: item });
  };

  const handleRemoveFromCart = (item) => {
    cartDispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleClearCart = () => {
    cartDispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total: ${cartState.total.toFixed(2)}</p>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartState.items.map((item) => (
              <li key={item.id}>
                <div>{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
      <h2>Available Items</h2>
      <ul>
        <li>
          <div>Item 1</div>
          <div>$9.99</div>
          <button
            onClick={() =>
              handleAddToCart({ id: 1, name: "Item 1", price: 9.99 })
            }
          >
            Add to Cart
          </button>
        </li>
        <li>
          <div>Item 2</div>
          <div>$14.99</div>
          <button
            onClick={() =>
              handleAddToCart({ id: 2, name: "Item 2", price: 14.99 })
            }
          >
            Add to Cart
          </button>
        </li>
        <li>
          <div>Item 3</div>
          <div>$19.99</div>
          <button
            onClick={() =>
              handleAddToCart({ id: 3, name: "Item 3", price: 19.99 })
            }
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ReducerApp;
