import React from "react";

const Film = ({url, children}) => {

    return(
        <>
            <a href={url}>{children}</a>
            <br></br>
        </>
    )
}

export default Film;