
import CandyContainer from "./CandyContainer"
import { useState } from 'react';


function CandyCard({name, image, desc, price}) {
    const [addCandies, setAddCandies]= useState(0);
    
    function handleClick(){
        setAddCandies(prevVal => !prevVal);
    };

    return (
        <div className = "candy card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <div> {desc} </div>
           <div>
            <button OnClick={handleClick}>Add</button>
            <div>{price}</div>
            
        </div>
        </div> 
     
    );
}


export default CandyCard;