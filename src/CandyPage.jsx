import React from'react';
import Form from './Form';
import CandyContainer from './CandyContainer';
import Search from './Search';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"


function CandyPage() {
   const [pages, setPages]= useState(null);


const { id } = useParams()

useEffect(() => {
    fetch(`http://localhost:3000/candies/${id}`)
    .then((resp) => resp.json())
    .then((pages) => {
        setPages(pages)
 });
}, [id]);

if (!pages) {
    return <p>Loading...</p>
}
const { name, image, desc, price, } = pages;

    return (
        <li className="cards__item">
        <div className = "candy_card">
            <h3 className = "candy_name">{name}</h3>
            <img src={image} 
            alt={name}
            className="candy_image" />
     
            <h3 className="candy_description"> {desc} </h3>
            <div>${price}</div>
            {/* {addCandies ? (
            <button 
            className="primary"
            onClick={handleClick}>Add</button>
            ) : (
                <button onClick={handleClick}>Remove</button>
            )} */}
        </div>
     </li>
    );
}


export default CandyPage;