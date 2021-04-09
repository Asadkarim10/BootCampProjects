import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import './product.css';


function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div style= {{ textAlign:'center' , justifyContent:"center" }} >
            <h1>Welcome to Product Item</h1>
            <div className="boxs" >
            <div className="links">
                <h4>{shoe.name}</h4>
                <img src={shoe.img}  height={200} alt="shoe" />

            </div>

            <div className="linkss">
                <h4>This shoe is {shoe.price} only. </h4>
                <h4> {shoe.avai} this shoe is available right now </h4>
                <h4>{shoe.differentcolor} this product is available in different color</h4>
            </div>
            </div>
        </div>
    );
}

export default ProductItem;
