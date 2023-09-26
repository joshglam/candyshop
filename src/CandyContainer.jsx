import React from'react';
import Search from './Search';
import CandyCard from "./CandyCard"
import {useState, useEffect} from "react";

function CandyContainer() {
    const [candy, setCandy]= useState([])
    const [ search, setSearch] = useState('')

    useEffect(()=> { 
        fetch(" http://127.0.0.1:5174/")
        .then(resp => resp.json())
        .then(candies => setCandy(candies))

    },[])

    const filteredCandy = candy.filter(candy => {
        return 
            candy.name.toLowerCase().includes(
            search.toLowerCase(),
            candy.desc.toLowerCase().includes(
                search.toLowerCase()
            ))
        
    })




    return (
        <div>
            <Search setSearch={setSearch} />
            <div className="cards">
                {candy.map(candy => {
                    return <CandyCard key={candy.id} {...candy} />
                })}
            </div>
        </div>
    )
            }

export default CandyContainer;