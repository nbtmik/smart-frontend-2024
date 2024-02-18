import React, { Fragment, useEffect } from "react";
import { MdMouse ,MdMoveDown } from "react-icons/md";
import "./Home.css";
//import ProductCard from "./ProductCard.jsx";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader"; 
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.jsx";

// const product ={
//     name:"Blue Tshirt",
//     images:[{url: "https://i.ibb.co/DRST11n/1.webp"}],
//     price:"$3000",
//     _id:"01",
// };

const Home=()=>{
    const alert=useAlert();
    const dispatch = useDispatch();
    const {loading,error,products} = useSelector((state)=>state.products);
    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    },[dispatch,error,alert]);
    
    //loading used to make customer wait until laoding of data completes 
    return(
        <Fragment>
            {loading ? (<Loader />):(
                <Fragment> 
        <MetaData title="WebsiteName" />
             <div className="banner">
                <p>Welcome To sMart</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#container">
                    <button>
                        Scroll <MdMouse />
                    </button>
                </a>
             </div>
             <h2 className="homeHeading">Featured Products</h2>
             <div className="container" id="container">
                 {products && products.map((product) => <ProductCard product={product} />)}
             </div>
        </Fragment>
            )}
        </Fragment>
    );
}
export default Home;