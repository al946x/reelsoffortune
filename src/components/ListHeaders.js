import React from "react";

function ListHeaders(props) {
    return (
        <div className="col-1">
            <h1>{props.headers}</h1>
        </div>
    )
}

export default ListHeaders;