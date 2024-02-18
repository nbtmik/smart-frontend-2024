import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../constants/cartConstants";
import axios from "axios";
//import {server} from "../store";

// Add to cart
export const addItemsToCart=(id,quantity)=>async(dispatch,getState)=>{
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/product/${id}`; //when we used in local
        //let link = `/api/v1/product/${id}`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/product/${id}`;

        const{data}= await axios.get(
            link,{withCredentials:true});

        dispatch({type:ADD_TO_CART,
            payload: {
            product: data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.images[0].url,
            stock:data.product.stock,
            quantity,
        },
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems)); //this is to store the quantity and all in localstorage so that after refresh it's should show
};

//Remove from cart
export const removeItemsFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:REMOVE_CART_ITEM,
        payload:id,
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
};

//Save shipping Info
export const saveShippingInfo =(data)=>async(dispatch)=>{
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload:data,
    });
    localStorage.setItem("shippingInfo",JSON.stringify(data));
}