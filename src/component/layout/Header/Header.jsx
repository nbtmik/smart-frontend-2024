import React from "react";
import {ReactNavbar} from 'overlay-navbar';
import {MdAccountCircle } from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md";
import logo from "../../../image/S_mart_logo.jpg"; 


const options ={
     burgerColor :"#CD853F",
     burgerColorHover :"#eb4034",
     logo,
     logoWidth :"250px",
    navColor1 :"white",
    opacity:"0.5",
    logoHoverSize :"10px",
    logoHoverColor :"#eb4034",
    link1Text :"Home",
    link2Text :"Products",
    link3Text :"Contact",
    link4Text :"About us",
    link1Url :"/",
    link2Url :"/products",
    link3Url :"/contact",
    link4Url :"/about",
    link1Size :"1.3vmax",
    link1Color :"rgba(35,35,35,0.8)",
    nav1justifyContent :"space-around",
    nav2justifyContent :"space-around",
    nav3justifyContent :"space-around",
    nav4justifyContent :"flex-start",
    link1ColorHover :"#eb4034",
    link1Margin :"1vmax",
    profileIcon :true,
    ProfileIconElement :MdAccountCircle,
    profileIconColor :"rgba(35,35,35,0.8)",
    searchIcon :true,
    profileIconUrl:"/login",
    SearchIconElement :MdSearch,
    searchIconColor :"rgba(35,35,35,0.8)",
    cartIcon :true,
    CartIconElement :MdAddShoppingCart,
    cartIconColor :"rgba(35,35,35,0.8)",
    profileIconColorHover :"#eb4034",
    searchIconColorHover :"#eb4034",
    cartIconColorHover :"#eb4034",
    cartIconColorMargin :"1vmax",
};
const Header =()=>{
    return <ReactNavbar {...options} />
};

export default Header;