import React, { Fragment, useState } from 'react';
import "./Header.css";
import { SpeedDial, SpeedDialAction} from "@material-ui/lab";
import { Backdrop } from '@material-ui/core';
import { MdDashboard } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdExitToApp } from 'react-icons/md';
import { MdListAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';//replaced with history
import { useAlert } from 'react-alert';
import {logout} from "../../../actions/userAction";
import { useDispatch, useSelector } from 'react-redux';
import zIndex from '@material-ui/core/styles/zIndex';
import { MdShoppingCart } from 'react-icons/md';
//import ProfilePic from "../../../image/Profile.png";
//import profile from "../../../image/Profile.png";


const UserOptions =({user})=>{

    const {cartItems} = useSelector((state)=>state.cart);

    const [open,setOpen]=useState(false);
    const navigate = useNavigate();
    const alert= useAlert();
    const dispatch = useDispatch();

    const options=[
    {icon:<MdListAlt />,name:"Order", func:orders},
    {icon:<MdPerson />, name:"Profile", func: account},
    {icon:<MdShoppingCart style={{color:cartItems.length>0?"tomato":"unset"}} />, name:`Cart(${cartItems.length})`, func: cart},
    {icon:<MdExitToApp />,name:"Logout", func:logoutUser },
    ];

    if(user.role==="admin"){
        options.unshift({icon:<MdDashboard />,name:"Dashboard",func:dashboard});
    }

    function dashboard(){
        navigate("/admin/dashboard");
    }

    function orders(){
        navigate("/orders");
    }

    function account(){
        navigate("/account");
    }

    function cart(){
        navigate("/cart");
    }

    function logoutUser(){
        dispatch(logout());
        alert.success("Logout Successfully");
    }


    return (
        <Fragment>
        <Backdrop open={open} style={{zIndex:"10"}} />
        <SpeedDial 
        ariaLabel='SpeedDial tooltip example'
        onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        style={{zIndex:"11"}}
        open={open}
        direction='down'
        className='speedDial'
        icon={<img
        className='speedDialIcon'
        src={user.avatar.url ? user.avatar.url : "../../../image/Profile.png"}
        alt="Profile"
         />}
        >
        {options.map((item)=>(
            <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600?true:false} />
        ))}

        </SpeedDial>

        </Fragment>
    );
};

export default UserOptions;