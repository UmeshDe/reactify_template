import React from "react";

const Card = ({ title = "MyCard", buttonText = "Click me", description = "Desc", src = "src" }) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={src}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <a href="#" className="btn btn-success">{buttonText}</a>
                </div>
            </div>
        </div>
    )
}
export default Card;