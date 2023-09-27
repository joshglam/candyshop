import React from'react';
import Search from './Search';
import CandyCard from "./CandyCard"
import {useState, useEffect} from "react";

function CandyContainer() {
    const [candies, setCandies]= useState([]);
    const [search, setSearch] = useState("") 

    useEffect(()=> { 
        fetch("http://localhost:3000/candies")
        .then(resp => resp.json())
        .then(data => setCandies(data))

    },[])


    const filteredCandy = candies.filter((candy) => {

    return candy.name.toLowerCase().includes(search.toLowerCase())||
    candy.desc.toLowerCase().includes(search.toLowerCase())
    

    })


    return (
        <div>
            <Search setSearch={setSearch} />
            <ul className="cards">
                {candies.map((candy) => {
                    return <CandyCard key={candy.id} {...candy}/>
                })}
            </ul>
        </div>
    )
            }

export default CandyContainer;