import React from'react';
import Search from './Search';
import CandyCard from "./CandyCard"
import {useState, useEffect} from "react";



function CandyContainer({candies, setCandies}) {
    const [search, setSearch] = useState("") 

    const filteredCandy = candies.filter((candy) => {
    return candy.name.toLowerCase().includes(
        search.toLowerCase()) || candy.desc.toLowerCase().includes(
        search.toLowerCase())

    })


    return (
        <div>
            <Search setSearch={setSearch} />
            <ul className="cards">
                {filteredCandy.map((candy) => {
                    return <CandyCard key={candy.id} {...candy}/>
                })}
            </ul>
        </div>
    )
            }

export default CandyContainer;