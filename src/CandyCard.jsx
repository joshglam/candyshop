
import CandyContainer from "./CandyContainer"
import { useState } from 'react';


function CandyCard({name, image, desc, price}) {
    const [addCandies, setAddCandies]= useState(0);
    
    function handleClick(){
        setAddCandies(prevVal => !prevVal);
    };

    return (
        <li className="cards__item">
        <div className = "candy_card">
            <h3 className = "candy_name">{name}</h3>
            <img src={image} alt={name} className="candy_image"/>
            <h3 className="candy_description"> {desc} </h3>
           <div>
            <button OnClick={handleClick}>Add</button>
            <div>{price}</div>
            
        </div>
        </div> 
     </li>
    );
}


export default CandyCard;