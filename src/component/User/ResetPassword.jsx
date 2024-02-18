import React, { Fragment,useEffect, useState } from "react";
import "./ResetPassword.css";
import Loader from "../layout/Loader/Loader";
import { useDispatch , useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate , useParams } from 'react-router-dom';
import MetaData from "../layout/MetaData";
import { MdLockOpen, MdLock} from "react-icons/md";

const ResetPassword = () =>{
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const {token} = useParams(); //here to make global variable

    const {error,success,loading}=useSelector((state)=>state.forgotPassword);

    const[password,setPassword]= useState("");
    const[confirmPassword,setConfirmPassword]= useState("");

    const resetPasswordSubmit =(e) =>{
        e.preventDefault();
        //const {token} = useParams(); // we have to use it outside to make it work as a global variable
        const myForm = new FormData();
        myForm.set("password",password);
        myForm.set("confirmPassword",confirmPassword);

        dispatch(resetPassword(token, myForm));
    };


    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        if(success){
            alert.success("Password Updated Successfully");
            navigate("/login");

        }
    },[dispatch,error,alert, success]);

    return(
        <Fragment>
            {loading?<Loader />: <Fragment>
        <MetaData title="Change Password" />
        <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
            <h2 className="resetPasswordHeading">Update Profile</h2>
            <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>
                <div>
                    <MdLockOpen />
                    <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>
                <div>
                    <MdLock />
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                     />
                </div>
                    <input
                    type="submit"
                    value="Update"
                    className="resetPasswordBtn"
                    />
                </form>
            </div>
        </div>
        </Fragment>}
        </Fragment>)
};

export default ResetPassword;

// import React, { Fragment,useEffect, useState } from "react";
// import "./ResetPassword.css";
// import Loader from "../layout/Loader/Loader";
// import { useDispatch , useSelector } from "react-redux";
// import { clearErrors, resetPassword } from "../../actions/userAction";
// import { useAlert } from "react-alert";
// import { useNavigate , useParams } from 'react-router-dom';
// import MetaData from "../layout/MetaData";
// import { MdLockOpen, MdLock} from "react-icons/md";

// const ResetPassword = ({}) => {
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const navigate = useNavigate();

//   const { error, success, loading } = useSelector(
//     (state) => state.forgotPassword
//   );

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const resetPasswordSubmit = (e) => {
//     e.preventDefault();
//     const {token} = useParams();

//     const myForm = new FormData();

//     myForm.set("password", password);
//     myForm.set("confirmPassword", confirmPassword);

//     dispatch(resetPassword(token, myForm));
//   };

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       alert.success("Password Updated Successfully");

//       navigate("/login");
//     }
//   }, [dispatch,error,alert, success]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="Change Password" />
//           <div className="resetPasswordContainer">
//             <div className="resetPasswordBox">
//               <h2 className="resetPasswordHeading">Update Profile</h2>

//               <form
//                 className="resetPasswordForm"
//                 onSubmit={resetPasswordSubmit}
//               >
//                 <div>
//                   <MdLockOpen />
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="loginPassword">
//                   <MdLock />
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     required
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                 </div>
//                 <input
//                   type="submit"
//                   value="Update"
//                   className="resetPasswordBtn"
//                 />
//               </form>
//             </div>
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default ResetPassword;