import React from "react";

import "../css/modal.css"

const Modal = ({comp}) => { 
    return(
        <div className={"modal"}>
            <div className={"modal-background"}/>
            <div className={"modal-content"}>
            test
            {comp}
            </div>
        </div>
    )
}

export default Modal
