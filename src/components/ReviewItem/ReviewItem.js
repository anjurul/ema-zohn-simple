import React from 'react';
import './ReviewItem.css';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const {img, name, quantity, key, price} = props.product;
    const ReviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'20px'
    }
    return (
        <div style={ReviewItemStyle} className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
            <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p>Quantity: {quantity}</p>
                <p><small>$ {price} </small></p>
                <br/>
                <button
                    className="main-button"
                    onClick={() => props.removeProduct(key)}
                >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;