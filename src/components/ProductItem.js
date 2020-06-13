import React from 'react'
import './ProductItem.css'


function ProductItem(props){
     const itemClass = `col-md-4 ${props.type}`
     const item = props.type.substring(0, props.type.indexOf('-'));


    return(
        <div className={itemClass}>
            {props.img}
            <div className="overlay">
                <a href="/#" className="icon" title="Add to Cart" 
                onClick={() => props.addCart(props.type,props.img,props.price)}>
                    <i className="fa fa-shopping-cart"></i>
                </a>
            </div>
            <div className='val'> {item} item: <span>${props.price}</span></div><br/>
        </div>
    )
}

export default ProductItem