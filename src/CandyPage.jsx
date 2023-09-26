import React from'react';
import Form from './Form';
import CandyContainer from './CandyContainer';
import Search from './Search';


function CandyPage() {
    const [candy, setCandy]= useState([])
    const [ search, setSearch] = useState('')

    useEffect(()=> { 
        fetch(" http://127.0.0.1:5174/")
        .then(resp => resp.json())
        .then(candies => setCandy(candies))

    },[])

    const filteredCandy = candies.filter(candy => {
        return 
            candy.name.toLowerCase().includes(
            search.toLowerCase(),
            candy.desc.toLowerCase().includes(
                search.toLowerCase()
            ))
        
    })



    return (
        <main>
            <CandyContainer candies={filteredCandy}/>
            <Search setSearch={setSearch}/>

        </main>
    );
}
export default CandyPage;