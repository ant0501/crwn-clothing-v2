import { CategoryItem } from "../categories/category.type";
import { CART_ACTION_TYPES, CartItem } from "./cart.type";
import { createAction,withMatcher, Action,ActionwithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems:CartItem[], cartItemToRemove:CartItem):CartItem[] => {
    //find the cart item to remove
    //
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    // check if quantity is equal to 1, then remove that item from the cart
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    //if not 1, then decrement 1
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems:CartItem[], cartItemToClear:CartItem):CartItem[]=> {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionwithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionwithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean:boolean):SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const  setCartIems = withMatcher((cartItems:CartItem[]):SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems:CartItem[], productToAdd:CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
     return setCartIems(newCartItems);
};
export const removeItemFromCart = (cartItems:CartItem[], cartItemToRemove:CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartIems(newCartItems);
};

export const clearItemFromCart = (cartItems:CartItem[], cartItemToClear:CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartIems(newCartItems);
};