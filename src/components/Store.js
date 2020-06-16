import React from 'react'
import ProductItem from './ProductItem'
import Head from './Head'



function Store(props){
    
    const list = ['cake-1','cake-2','cake-3','cupcake-1','cupcake-2',
    'cupcake-3','doughnut-1','doughnut-2','doughnut-3','sweets-1','sweets-2',
    'sweets-3']

    const prd = list.map( (item,i) => {
        let img = <img key={item} src={require(`../img/${item}.jpeg`)} alt='cake'/>
        return <ProductItem key={i} img={img} type={img.key} />
    })

    return(
        <div >
            <Head item={[]}/><br/>
           {/* <Routes /> */}
            <h1 style={{textAlign:'center',fontSize:'60px',color:'purple'}}>Store Items</h1>
            <br/>
            <div  >
                {prd}
            </div>

        </div>
    )
}

export default Store