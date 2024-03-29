import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import { MdPinDrop, MdHome , MdLocationCity ,MdPublic,MdPhone, MdTransferWithinAStation } from "react-icons/md";
import {Country , State} from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps.jsx";
import { useNavigate } from "react-router-dom";

const Shipping =()=>{
    const dispatch= useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const {shippingInfo}= useSelector((state)=>state.cart);
    const [address,setAddress]= useState(shippingInfo.address);
    const [city,setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country,setCountry] = useState(shippingInfo.country);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);

    const shippingSubmit = (e) =>{
        e.preventDefault();
        if(phoneNo.length<10 || phoneNo.length>10){
            alert.error("Phone Number Should be 10 digits");
            return ;
        }
        dispatch(
            saveShippingInfo({address,city,state,country,pinCode,phoneNo})
        );
        navigate("/order/confirm");
    };

    return(
        <Fragment>
        <MetaData title="Shipping Deatils" />
        <CheckoutSteps activeStep={0} />
           <div className="shippingContainer">
            <div className="shippingBox">
                <h2 className="shippingHeading">Shipping Details</h2>
                <form 
                className="shippingForm"
                encType="multipart/form-data"
                onSubmit={shippingSubmit}
                >
                <div>
              <MdHome />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <MdLocationCity />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <MdPinDrop />
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <MdPhone />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>
            <div>
              <MdPublic />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
              </div>
              {country && (
              <div>
                <MdTransferWithinAStation />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
                </form>
            </div>
           </div>
        </Fragment>
    )
};

export default Shipping;