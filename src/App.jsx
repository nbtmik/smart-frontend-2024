import { useEffect, useState } from 'react'
import './App.css'
import Header from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import webFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSignUp from './component/User/LoginsignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions.jsx';
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.jsx";
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile.jsx';
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import axios from 'axios';
import Payment from "./component/Cart/Payment.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess.jsx';
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import ProductList from "./component/admin/ProductList.jsx";
import NewProduct from "./component/admin/NewProduct.jsx";
import UpdateProduct from "./component/admin/UpdateProduct.jsx";
import OrderList from "./component/admin/OrderList.jsx";
import ProcessOrder from "./component/admin/ProcessOrder.jsx";
import UsersList from "./component/admin/UsersList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx";
import ProductReviews from "./component/admin/ProductReviews.jsx";
import Contact from './component/layout/Contact/Contact';
import NotFound from './component/layout/Not Found/NotFound';
import About from "./component/layout/About/about";


function App() {

  const {isAuthenticated,user}=useSelector((state)=>state.user);
   
  //---(right now i've used raw value of publish key(pk) as i couldn't able to fletch the pk from axios i'll look into it later)
  const [stripeApiKey,setStripeApiKey] = useState("");// fixed the issue here

  async function getStripeApiKey(){
    const BASE_URL = "http://localhost:4000";
    //const {data}= await axios.get(`${BASE_URL}/api/v1/stripeapikey`,{withCredentials:true});
    const {data}= await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/stripeapikey`,{withCredentials:true});
    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(()=>{ // to load the font before the page gets load
    webFont.load({
      google: {
        families: ["Roboto","Droid Sans","Chilanka"]
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  
  // this is used so that people can't able to inspect from browser(will use before deployment)
  //window.addEventListener("contextmenu", (e) => e.preventDefault());
  
  return (
    <Router>
       <Header />
       {isAuthenticated && <UserOptions user={user} />}
       <Routes>
       <Route extact path="/" element={<Home />} />
       <Route extact path="/product/:id" element={<ProductDetails />} />
       <Route extact path="/products" element={<Products />} />
       <Route path="/products/:keyword" element={<Products />} />

       <Route extact path="/search" element={<Search />} />
       <Route extact path="/contact" element={<Contact />} />
       <Route extact path="/about" element={<About />} />
       <Route extact path="/account" element={ <ProtectedRoute> <Profile /> </ProtectedRoute>} />
       <Route extact path="/me/update" element={ <ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} />
       <Route extact path="/password/update" element={ <ProtectedRoute> <UpdatePassword /> </ProtectedRoute>} />
       <Route extact path="/password/forgot" element={ <ForgotPassword /> } />
       <Route extact path="/password/reset/:token" element={ <ResetPassword /> } />
       <Route extact path="/login" element={<LoginSignUp />} />

       <Route extact path="/cart" element={<Cart />} />

       <Route extact path="/login/shipping" element={ <ProtectedRoute> <Shipping /> </ProtectedRoute>} />
       <Route extact path="/order/confirm" element={ <ProtectedRoute> <ConfirmOrder /> </ProtectedRoute>} />
       
       <Route extact path="/process/payment" element={stripeApiKey && (<Elements stripe={loadStripe(stripeApiKey)}><ProtectedRoute><Payment /></ProtectedRoute></Elements>)} />
       <Route extact path="/success" element={ <ProtectedRoute> <OrderSuccess /> </ProtectedRoute>} />
       <Route extact path="/orders" element={ <ProtectedRoute> <MyOrders /> </ProtectedRoute>} />
       <Route extact path="/order/:id" element={ <ProtectedRoute> <OrderDetails /> </ProtectedRoute>} />

       {/* <Route extact path="/admin/dashboard" element={ <ProtectedRoute isAdmin={true} > <Dashboard /> </ProtectedRoute>} />
       <Route extact path="/admin/products" element={ <ProtectedRoute isAdmin={true} > <ProductList /> </ProtectedRoute>} />
       <Route extact path="/admin/product" element={ <ProtectedRoute isAdmin={true} > <NewProduct /> </ProtectedRoute>} /> */}
       <Route extact path="/admin/dashboard" element={ <ProtectedRoute isAdmin={true} > <Dashboard /> </ProtectedRoute>} />
       <Route extact path="/admin/products" element={ <ProtectedRoute isAdmin={true} > <ProductList /> </ProtectedRoute>} />
       <Route extact path="/admin/product" element={ <ProtectedRoute isAdmin={true} > <NewProduct /> </ProtectedRoute>} />
       <Route extact path="/admin/product/:id" element={ <ProtectedRoute isAdmin={true} > <UpdateProduct /> </ProtectedRoute>} />
       <Route extact path="/admin/orders" element={ <ProtectedRoute isAdmin={true} > <OrderList /> </ProtectedRoute>} />
       <Route extact path="/admin/order/:id" element={ <ProtectedRoute isAdmin={true} > <ProcessOrder /> </ProtectedRoute>} />
       <Route extact path="/admin/users" element={ <ProtectedRoute isAdmin={true} > <UsersList /> </ProtectedRoute>} />
       <Route extact path="/admin/user/:id" element={ <ProtectedRoute isAdmin={true} > <UpdateUser /> </ProtectedRoute>} />
       <Route extact path="/admin/reviews" element={ <ProtectedRoute isAdmin={true} > <ProductReviews /> </ProtectedRoute>} />

       <Route path="*" element={<NotFound />} />

       </Routes>
       <Footer />
    </Router>
 
  );
}

export default App 
