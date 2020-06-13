import React from 'react'
import FilterBtn from './FilterBtn'
import ProductItem from './ProductItem'
import 'font-awesome/css/font-awesome.min.css';
import './Product.css'


function Product(props){

    //images names before the '.jpeg' in array
    const imgArray = ['cake-1','cake-2','cake-3','cupcake-1','cupcake-2',
    'cupcake-3','doughnut-1','doughnut-2','doughnut-3','sweets-1','sweets-2',
    'sweets-3']


    const[filter, setFilter] = React.useState('')
    const[search, setSearch] = React.useState('')

    //Getting the button click from filter component
    const filterList = (i) => {
        if(i){
            const value = i.toLowerCase();
            setFilter(value)
        }
        
    }

    //Getting the search word from search input
    const searchList = (i) => {
        setSearch(i)
    }

    //Getting items value to be added to Cart
    const addToCart = (item,img,price) => {
        props.addToModal(item,img,price)
    }

    //Displaying items using the image array and the require function 
    const prd = imgArray.map( (item,i) => {
        
        let img = <img key={item} src={require(`../img/${item}.jpeg`)} alt='cake'/>
        const itemName = img.key.substring(0, img.key.indexOf('-'));
        
        //Adding prices to items
        let price = 0
        if(itemName === 'cake'){
            price = 20
        }else if(itemName === 'cupcake'){
            price = 15
        }else if(itemName === 'sweets'){
            price = 10
        }else if(itemName === 'doughnut'){
            price = 5
        }

        //filter and display items on button click
        if(filter === itemName){
            return <ProductItem key={i} img={img} type={img.key} 
            price={price} id={i} addCart={addToCart}/>
        }
        else if(filter === 'all'){
            return <ProductItem key={i} img={img} type={img.key} 
            price={price} id={i} addCart={addToCart}/>
        }
        else if(search && itemName.includes(search)){
            return <ProductItem key={i} img={img} type={img.key} 
            price={price} id={i} addCart={addToCart}/>
        }
        return ''
        
    })
    

 return(
        <div className='listProduct'>
            
            <FilterBtn handleFilter={filterList} searchInput={searchList}/>
            <div className="row store-items" id="store-items">
                {prd}
            </div>
            
        </div> 
    
    
    )
}

export default Product