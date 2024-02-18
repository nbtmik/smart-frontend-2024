import { LOGIN_REQUEST,LOGIN_FAIL,LOGIN_SUCCESS,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL ,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL ,LOGOUT_SUCCESS,LOGOUT_FAIL,UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,UPDATE_PASSWORD_REQUEST,UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_RESET, UPDATE_PASSWORD_FAIL, CLEAR_ERRORS , FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL,RESET_PASSWORD_REQUEST,RESET_PASSWORD_FAIL,RESET_PASSWORD_SUCCESS,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_RESET,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL, 
} from "../constants/userConstants";

import axios from "axios";

//Login
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST});
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/login`;//to use in local
        //let link = `/api/v1/login`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/login`;

        const config = {headers:{"Content-Type":"application/json"},withCredentials:true};

        const{data}= await axios.post(
            link,
            {email,password},
            config,
        );
        dispatch({type:LOGIN_SUCCESS,payload: data.user});
    }catch(error){
        dispatch({type:LOGIN_FAIL, payload: error.response.data.message});
    }
};

//Register
export const register=(userData)=>async(dispatch)=>{
    try{
        dispatch({type:REGISTER_USER_REQUEST});
        const config = {headers:{"Content-Type":"multipart/form-data"}};
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/register`;//to use in local
        //let link = `/api/v1/register`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/register`;

        const{data}= await axios.post(link,userData,config);

        dispatch({type:REGISTER_USER_SUCCESS,payload: data.user});


    }catch(error){
        dispatch({type:REGISTER_USER_FAIL, payload: error.response.data.message});
    }
};

//load User
export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch({type:LOAD_USER_REQUEST});
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/me`;//for my prfile- to use in local
        //let link = `/api/v1/me`;//for my prfile
        let link = `${import.meta.env.VITE_SERVER}/api/v1/me`;

        const {data}= await axios.get(link,{withCredentials:true});
        dispatch({type:LOAD_USER_SUCCESS,payload: data.user});
    }catch(error){
        dispatch({type:LOAD_USER_FAIL, payload: error.response.data.message});
    }
};

//logout User
export const logout=()=>async(dispatch)=>{
    try{
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/logout`;//for my prfile-- to use in local
        //let link = `/api/v1/logout`;//for my prfile
        let link = `${import.meta.env.VITE_SERVER}/api/v1/logout`;

        await axios.get(link,{withCredentials:true});

        dispatch({type:LOGOUT_SUCCESS});
    }catch(error){
        dispatch({type:LOGOUT_FAIL, payload: error.response.data.message});
    }
};

//Update Profile
export const updateProfile=(userData)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_PROFILE_REQUEST});
        const config = {headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/me/update`;// to use in local
        //let link = `/api/v1/me/update`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/me/update`;

        const{data}= await axios.put(link,userData,config);

        dispatch({type:UPDATE_PROFILE_SUCCESS,payload: data.success});


    }catch(error){
        dispatch({type:UPDATE_PROFILE_FAIL, payload: error.response.data.message});
    }
};

//Update Password
export const updatePassword=(passwords)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_PASSWORD_REQUEST});
        const config = {headers:{"Content-Type":"application/json"},withCredentials:true};
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/password/update`;//to use in local
        //let link = `/api/v1/password/update`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/password/update`;

        const{data}= await axios.put(link,passwords,config);

        dispatch({type:UPDATE_PASSWORD_SUCCESS,payload: data.success});


    }catch(error){
        dispatch({type:UPDATE_PASSWORD_FAIL, payload: error.response.data.message});
    }
};

//Forgot password
export const forgotPassword=(email)=>async(dispatch)=>{
    try{
        dispatch({type:FORGOT_PASSWORD_REQUEST});
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/password/forgot`;//to use in local
        //let link = `/api/v1/password/forgot`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/password/forgot`;

        const config = {headers:{"Content-Type":"application/json"}};

        const{data}= await axios.post(
            link,
            email,
            config,
        );
        dispatch({type:FORGOT_PASSWORD_SUCCESS,payload: data.message});
    }catch(error){
        dispatch({type:FORGOT_PASSWORD_FAIL, payload: error.response.data.message});
    }
};

//Reset password
export const resetPassword=(token,passwords)=>async(dispatch)=>{
    try{
        dispatch({type:RESET_PASSWORD_REQUEST});
        const BASE_URL = "http://localhost:4000";
        //let link = `${BASE_URL}/api/v1/password/reset/${token}`;// to use in local
        //let link = `/api/v1/password/reset/${token}`;
        let link = `${import.meta.env.VITE_SERVER}/api/v1/password/reset/${token}`;

        const config = {headers:{"Content-Type":"application/json"}};

        const{data}= await axios.put(
            link,
            passwords,
            config,
        );
        dispatch({type:RESET_PASSWORD_SUCCESS,payload: data.success});
    }catch(error){
        dispatch({type:RESET_PASSWORD_FAIL, payload: error.response.data.message});
    }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_USERS_REQUEST });
      const BASE_URL = "http://localhost:4000";
      //let link = `${BASE_URL}/api/v1/admin/users`;// to use in local
      //let link = `/api/v1/admin/users`;
      let link = `${import.meta.env.VITE_SERVER}/api/v1/admin/users`;

      const { data } = await axios.get(link,{withCredentials:true});
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
    }
  };

  // get User Details
export const getUserDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const BASE_URL = "http://localhost:4000";
      //let link = `${BASE_URL}/api/v1/admin/user/${id}`;//to use in local
      //let link = `/api/v1/admin/user/${id}`;
      let link = `${import.meta.env.VITE_SERVER}/api/v1/admin/user/${id}`;

      const { data } = await axios.get(link,{withCredentials:true});
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
    }
  };

  // Update User
export const updateUser = (id, userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const BASE_URL = "http://localhost:4000";
      //let link = `${BASE_URL}/api/v1/admin/user/${id}`;//to use in local
      //let link = `/api/v1/admin/user/${id}`;
      let link = `${import.meta.env.VITE_SERVER}/api/v1/admin/user/${id}`;
  
      const config = { headers: { "Content-Type": "application/json"},withCredentials:true };
  
      const { data } = await axios.put(link,userData,config);
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Delete User
export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const BASE_URL = "http://localhost:4000";
      //let link = `${BASE_URL}/api/v1/admin/user/${id}`;// to use in local
      //let link = `/api/v1/admin/user/${id}`;
      let link = `${import.meta.env.VITE_SERVER}/api/v1/admin/user/${id}`;
  
      const { data } = await axios.delete(link,{withCredentials:true});
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };




// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };