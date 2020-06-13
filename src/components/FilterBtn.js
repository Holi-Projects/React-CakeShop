import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './FilterBtn.css'

function FilterBtn(props){

    const handleFilter = (e) => {
        props.handleFilter(e.target.value)
    }

    const handleInput = (e) =>{
        props.searchInput(e.target.value)
    }

    return(
        <div className='filter'>
            <h1 ><i><b>Our </b></i><strong>Products</strong></h1>
            
            <input type="button" name="cat" value="All" onClick={handleFilter}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" name="cat" value="CAKE" onClick={handleFilter}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" name="cat" value="CUPCAKE" onClick={handleFilter}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" name="cat" value="SWEETS" onClick={handleFilter}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" name="cat" value="DOUGHNUT" onClick={handleFilter}/>
            <br /><br />
            <div>
                <button><i className="fa fa-search"></i></button>
                <input type="text" id="find" placeholder="item" onChange={handleInput} />
            </div>
        </div>
    )
}

export default FilterBtn