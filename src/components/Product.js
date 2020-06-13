import React from 'react'
import FilterBtn from './FilterBtn'
import ProductItem from './ProductItem'
import 'font-awesome/css/font-awesome.min.css';
import './Product.css'


function Product(props){

    const imgArray = ['cake-1','cake-2','cake-3','cupcake-1','cupcake-2',
    'cupcake-3','doughnut-1','doughnut-2','doughnut-3','sweets-1','sweets-2',
    'sweets-3']


    const[filter, setFilter] = React.useState('')
    const[search, setSearch] = React.useState('')

    const filterList = (i) => {
        if(i){
            const value = i.toLowerCase();
            setFilter(value)
        }
        
    }

    const searchList = (i) => {
        setSearch(i)
    }

    const addToCart = (item,img,price) => {
        //console.log(img.props.src)
        props.addToModal(item,img,price)
    }

    const prd = imgArray.map( (item,i) => {
        //return <img key={item} src={require(`../img/${item}.jpeg`)} alt='cake'/>
        let img = <img key={item} src={require(`../img/${item}.jpeg`)} alt='cake'/>
        const itemName = img.key.substring(0, img.key.indexOf('-'));
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

        if(filter === itemName){
            //console.log(item)
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
        //return <ProductItem key={item} img={img} type={img.key}/>
    })
    //console.log(prd)

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