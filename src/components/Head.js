import React from 'react'
import './Head.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../img/logo.svg'


function Head(props){

    
    const[visible,setVisible] = React.useState('modal1')

    //Display modal on click
    const toggleModal = () => {
        setVisible('show-modal')
    }

    //Hide modal on click
    const hide = () => {
        setVisible('modal1')
    }
    
    
    const list = props.item.map( (item,i) =>{
       
        return(
        <li key={i}> <img src={item.mimg} alt='item'/>
            Product: {item.mit} <br />
        <span>Price: ${item.price}</span>
            <a href='/#' id='rm' onClick={() => props.deleteItem(item.id)}>
                <i className='fa fa-trash'></i>
            </a>
        </li>)
    })
    
    const addMsg = props.item.length>0? `No. Items ${props.item.length}`:'Add Items'
    
    return(
        
        <div>
            <div className='nav'>
                <nav>
                    <div id='logo'><a href="/#"><img src={logo} alt='logo' /></a></div>
                    <div id='navList'>
                        <a href="/#">Home</a>
                        <a href="/#">About</a>
                        <a href="/#">Store</a>
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
                    <h3>Total $<span id="total">{props.total}</span></h3>
                            <div id="btn">
                                <button id="clear" onClick={props.clear}>Clear Cart</button>
                                <button id="checkout">CheckOut</button>
                            </div>
                </div>
            </div>

        </div>
    )
}

export default Head