import React from 'react'
import './Body.css'
import 'font-awesome/css/font-awesome.min.css';
import img from '../img/sweets-1.jpeg'


function Body(props){
    return(
    <div id="about"><img src={img} alt='img'/>
        <h1>About Us</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aliquam voluptas beatae vitae expedita consectetur nesciunt quia
            deserunt asperiores facere fuga dicta fugiat corrupti et omnis
            porro at dolorum! Ad!
        </p>
        <button>Explore </button>

    </div>
    )
}

export default Body