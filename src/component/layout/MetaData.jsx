import React from "react";
import Helmet from "react-helmet";

const MetaData=({title})=>{//to give title of the page
    return(
        <Helmet>
        <title>{title}</title>
        </Helmet>
    );
}

export default MetaData