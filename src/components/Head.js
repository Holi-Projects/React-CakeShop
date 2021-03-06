import React from 'react'
import './Head.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../img/logo.svg'
import Routes from './Routes';
import { Link } from 'react-router-dom';



function Head(props){

    
    const[visible,setVisible] = React.useState('modal1')

    //Display modal on click
    const toggleModal = () => {
        if(props.item.length > 0)
        setVisible('show-modal')
    }

    //Hide modal on click
    const hide = () => {
        setVisible('modal1')
    }

    //preventing items from re-rendering/refresh when deleted
    const removeItem = (e,id) => {
        e.preventDefault()
        props.deleteItem(id)
    }
    
    
    const list = props.item.map( (item,i) =>{
       
        return(
        <li key={i}> <img src={item.mimg} alt='item'/>
            Product: {item.mit} <br />
        <span>Price: ${item.price}</span>
            <a href='/#' id='rm' onClick={(e) => removeItem(e,item.id)}>
                <i className='fa fa-trash'></i>
            </a>
        </li>)
    })
    
    const addMsg = props.item.length>0? `No. Items ${props.item.length}`:'Add Items'
    //console.log(list)
    return(
        
        <div>
            <div className='nav'>
                <nav>
                    <div id='logo'><Link to="/home"><img src={logo} alt='logo' /></Link></div>
                    <div id='navList'>
                        {/* <a href="/#">Home</a>
                        <a href="/#">About</a>
                        <a href="/#">Store</a> */}
                        <Routes />
                    </div>

                    <div className="nav-item">
                        <span><i className="fa fa-phone"></i>+1379008899<br/>
                        <i className="fa fa-envelope"></i>dcake@gm.com</span> &nbsp;&nbsp;
                        
                    <button id="cart" onClick={toggleModal}><i className="fa fa-shopping-cart"></i> {addMsg}</button>
                    </div>
                </nav>

                <header>
                    <h1><b>Welcome To </b><span style={{ fontSize: '80px', color: 'coral' }}><i>DonCakes</i></span></h1>
                    <button>Explore</button>
                </header>
            </div>

            <div className={visible} >
            
                <div className="modal-content1">
                    <span className="close-button" onClick={hide}>
                    <i className="fa fa-close"></i></span>
                    <ul className="prod">
                        {list} 
                    </ul>
                    <h3>Total $<span id="total">{props.total}</span>&nbsp;&nbsp;  
                    Qty: {props.item.length}</h3>
                            <div id="btn">
                                <button id="clear" onClick={props.clear}>Clear Cart</button>&nbsp;&nbsp;
                                <button id="checkout">CheckOut</button>
                            </div>
                </div>
            </div>

        </div>
    )
}

export default Head