import { useState } from 'react';
import { Link } from 'react-router-dom';


function CandyCard({id, name, image, desc, price}) {
    const [addCandies, setAddCandies]= useState(true);
    
    function handleClick() {
        setAddCandies(prevVal => !prevVal);
    };

    return (
        <li className="cards__item">
        <div className = "candy_card">
            <h3 className = "candy_name">{name}</h3>
            <Link to={`/candy/${id}`}>
            <img src={image} 
            alt={name}
            className="candy_image"
            />
            </Link>
            <h3 className="candy_description"> {desc} </h3>
            <div className= "detail_price">${price}</div>
            {addCandies ? (
            <button 
            className="primary"
            onClick={handleClick}>Add</button>
            ) : (
                <button onClick={handleClick}>Remove</button>
            )}
        </div>
     </li>
    );
}


export default CandyCard;