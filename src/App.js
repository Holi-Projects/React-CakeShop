import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Product from './components/Product';
import './App.css';

function App() {

  const[modalList, setList] = React.useState([])
  let[itemPrice, setPrice] = React.useState(0)

  //Passing and setting values for the modal portal cart
  const modalValues = (item,img,price) => {
    const imgVal = img.props.src
    const itemval = item.substring(0, item.indexOf('-'))
    const itemID = (Math.random()*100).toFixed()
    const modalItem = {id: itemID,mit: itemval, mimg: imgVal,price: price}
    if(itemval){
      setList([...modalList,modalItem])
      let dollar = Number(price)
      itemPrice += dollar
      setPrice(itemPrice)
    }
    //console.log(itemPrice)
  }


  //Removing items from cart 
  const removeItem = (i) => {
    console.log(i)
    modalList.map(item =>{
      if(item.id === i){
        let subPrice = itemPrice - item.price
        //console.log(subPrice)
        setPrice(subPrice)
      }  
      return item
    })
    setList(modalList.filter(item => item.id !== i));

  }

  //Click to clear the cart
  const clearList = () => {
    setList([])
    setPrice(0)
  }

  
  return (
    <div className="App">
      <Head item={modalList} 
      deleteItem={removeItem} 
      total={itemPrice} 
      clear={clearList}/>
      <Body />
      <Product addToModal={modalValues}/>
    </div>
  );
}

export default App;
