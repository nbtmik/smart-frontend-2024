import React, { useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chart from 'chart.js/auto'; // added this to get the charts (getting error if not added)
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction.jsx";
import { getAllOrders } from "../../actions/orderAction.jsx";
import { getAllUsers } from "../../actions/userAction.jsx";

const Dashboard =() =>{

    const dispatch = useDispatch();

    const {products} = useSelector((state)=>state.products);
    const {orders} = useSelector((state)=>state.allOrders);
    const {users} = useSelector((state) => state.allUsers);

    let OutOfStock = 0;
    products &&
       products.forEach((item)=>{
        if(item.stock ===0){
            OutOfStock +=1;
        }
       });

       useEffect(()=>{
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
        },[dispatch]);

        let totalAmount = 0;
        orders &&
          orders.forEach((item) => {
            totalAmount += item.totalPrice;
          });

    const lineState ={
        labels:["Initial Amount","Amount Earned"],
        datasets:[
            {
                label:"TOTAL AMOUNT",
                backgroundColor:["tomato"],
                hoverBackgroundColor:["rgb(197,72,49)"],
                data:[0,totalAmount],
            },
        ],
    };

    const DoughnutState ={
        labels:["Out of Stock","Instock"],
        datasets:[
            {
                backgroundColor: ["#00A684","#6800b4"],
                hoverBackgroundColor: ["#4b5000","#35014F"],
                data:[OutOfStock,products.length - OutOfStock],
            },
        ],
    };


    return(
    <div className="dashboard">
        <Sidebar />

        <div className="dashboardContainer">
            <Typography component="h1"><b>Dashboard</b></Typography>
            <div className="dashboardSummary">
                <div>
                    <p>
                        Total Amount <br /> ₹{totalAmount.toFixed(2)}
                    </p>
                </div>
                <div className="dashboardSummaryBox2">
                    <Link to="/admin/products">
                        <p>Product</p>
                        <p>{products && products.length}</p>
                    </Link>
                    <Link to="/admin/orders">
                        <p>Orders</p>
                        <p>{orders && orders.length}</p>
                    </Link>
                    <Link to="/admin/users">
                        <p>Users</p>
                        <p>{users && users.length}</p>
                    </Link>
                </div>
            </div>

            <div className="lineChart">
                <Line data={lineState} />
            </div>
            <div className="doughnutChart">
                <Doughnut data={DoughnutState} />
            </div>
        </div>
    </div>
    );
};

export default Dashboard;