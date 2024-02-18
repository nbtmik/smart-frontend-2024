import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProduct , getProductDetails } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { MdAccountTree, MdDescription, MdStorage , MdSpellcheck , MdAttachMoney } from "react-icons/md";
import { UPDATE_PRODUCT_RESET } from "../../constants/productContants";
import Sidebar from "./Sidebar.jsx";
import { useNavigate , useParams } from "react-router-dom";

// const UpdateProduct=()=>{
//     const dispatch = useDispatch();
//     const alert = useAlert();
//     const navigate = useNavigate();
//     const {productId} = useParams();

//     const { error, product } = useSelector((state) => state.productDetails);

//     const {loading,error: updateError,isUpdated,} = useSelector((state) => state.product);

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("");
//     const [stock, setStock] = useState(0);
//     const [images, setImages] = useState([]);
//     const [oldImages, setOldImages] = useState([]);
//     const [imagesPreview, setImagesPreview] = useState([]);

//     const categories = [
//         "Laptop",
//         "Footwear",
//         "Bottom",
//         "Tops",
//         "Attire",
//         "Camera",
//         "SmartPhones",
//       ];

//       useEffect(()=>{
//         if (product && product._id !== productId) {
//             dispatch(getProductDetails(productId));
//           } else {
//             setName(product && product.name);
//             setDescription(product && product.description);
//             setPrice(product && product.price);
//             setCategory(product && product.category);
//             setStock(product && product.stock);
//             setOldImages(product && product.images);
//           }
//         if(error){
//             alert.error(error);
//             dispatch(clearErrors());
//         }
//         if (updateError) {
//             alert.error(updateError);
//             dispatch(clearErrors());
//           }

//         if(isUpdated){
//             alert.success("Product Update Successfully");
//             navigate("/admin/products");
//             dispatch({ type: UPDATE_PRODUCT_RESET });
//         }
//       },[dispatch,alert,error,isUpdated,productId,product,updateError]);
      
//       //to add details of product in the form
//       const updateProductSubmitHandler = (e) => {
//         e.preventDefault();
    
//         const myForm = new FormData();
    
//         myForm.set("name", name);
//         myForm.set("price", price);
//         myForm.set("description", description);
//         myForm.set("category", category);
//         myForm.set("stock", stock);
    
//         images.forEach((image) => {
//           myForm.append("images", image);
//         });
//         dispatch(updateProduct(productId,myForm));
//       };

//       //To add img of product multiple img can be uploaded
//       const updateProductImagesChange = (e) => {
//         const files = Array.from(e.target.files);
    
//         setImages([]);
//         setImagesPreview([]);
//         setOldImages([]);
    
//         files.forEach((file) => {
//           const reader = new FileReader();
    
//           reader.onload = () => {
//             if (reader.readyState === 2) {
//                 //check if their is old img avaiable for not for that product it'll include another img with old one
//               setImagesPreview((old) => [...old, reader.result]);
//               setImages((old) => [...old, reader.result]);
//             }
//           };
    
//           reader.readAsDataURL(file);
//         });
//       };

//     return(
//         <Fragment>
//             <MetaData title="Create Product" />
//             <div className="dashboard">
//                 <Sidebar />
//                 <div className="newProductContainer">
//                     <form className="createProductForm"
//                      encType="multipart/form-data"
//                      onSubmit={updateProductSubmitHandler}
//                      >
//                     <h1>Create Product</h1>
//                     <div>
//                     <MdSpellcheck />
//                         <input
//                             type="text"
//                             placeholder="Product Name"
//                             required
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         </div>
//                         <div>
//               <MdAttachMoney />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//                 value={price}
//               />
//             </div>
//             <div>
//               <MdDescription />

//               <textarea
//                 placeholder="Product Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>
//             <div>
//               <MdAccountTree />
//               <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <MdStorage />
//               <input
//                 type="number"
//                 placeholder="Stock"
//                 required
//                 onChange={(e) => setStock(e.target.value)}
//                 value={stock}
//               />
//             </div>
//             <div id="createProductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={updateProductImagesChange}
//                 multiple
//               />
//             </div>
//             <div id="createProductFormImage">
//               {oldImages && oldImages.map((image, index) => (
//                 <img key={index} src={image.url} alt="Old Product Preview" />
//               ))}
//             </div>
//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>
//             <Button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Create
//             </Button>
//                     </form>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default UpdateProduct;

const UpdateProduct = ({}) => {
    const alert = useAlert();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
  
    const { error, product } = useSelector((state) => state.productDetails);
  
    const {
      loading,
      error: updateError,
      isUpdated,
    } = useSelector((state) => state.product);
  
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
  
    const categories = ["Jewellery","Saree","Lehenga","Purse","Hand Bags","Undergarments","Bengali gamcha","Bedsheet","Handkerchief","Kurti","Leggings"];
  
    // const productId = match.params.id;
  
    useEffect(() => {
      if (product && product._id !== id) {
        dispatch(getProductDetails(id));
      } else {
        setName(product && product.name);
        setDescription(product && product.description);
        setPrice(product && product.price);
        setCategory(product && product.category);
        setStock(product && product.stock);
        setOldImages(product && product.images);
      }
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        alert.success("Product Updated Successfully");
        navigate("/admin/products");
        dispatch({ type: UPDATE_PRODUCT_RESET });
      }
    }, [
      dispatch,
      alert,
      error,
      isUpdated,
      id,
      product,
      updateError,
      navigate
    ]);
  
    const updateProductSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("name", name);
      myForm.set("price", price);
      myForm.set("description", description);
      myForm.set("category", category);
      myForm.set("stock", stock);
  
      images.forEach((image) => {
        myForm.append("images", image);
      });
      dispatch(updateProduct(id, myForm)); 
    };
  
    const updateProductImagesChange = (e) => {
      const files = Array.from(e.target.files);
  
      setImages([]);
      setImagesPreview([]);
      setOldImages([]);
  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesPreview((old) => [...old, reader.result]);
            setImages((old) => [...old, reader.result]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    };
  
    return (
      <Fragment>
        <MetaData title="Update Product" />
        <div className="dashboard">
          <Sidebar />
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updateProductSubmitHandler}
            >
              <h1>Update Product</h1>
  
              <div>
                <MdSpellcheck />
                <input
                  type="text"
                  placeholder="Product Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <MdAttachMoney />
                <input
                  type="number"
                  placeholder="Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
  
              <div>
                <MdDescription />
  
                <textarea
                  placeholder="Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="1"
                ></textarea>
              </div>
  
              <div>
                <MdAccountTree />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose Category</option>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
  
              <div>
                <MdStorage />
                <input
                  type="number"
                  placeholder="Stock"
                  required
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                />
              </div>
  
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProductImagesChange}
                  multiple
                />
              </div>
  
              <div id="createProductFormImage">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <img key={index} src={image.url} alt="Old Product Preview" />
                  ))}
              </div>
  
              <div id="createProductFormImage">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>
  
              <Button
                id="createProductBtn"
                type="submit"
                disabled={loading ? true : false}
              >
                Update
              </Button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default UpdateProduct;