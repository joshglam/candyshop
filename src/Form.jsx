import { useState } from "react"

export default function Form({ setCandies }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(null)


    function handleName(e) {
        setName(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleDesc(e) {
        setDesc(e.target.value)
    }

    function handlePrice(e) {
        setPrice(parseInt(e.target.value))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newCandy = {
            "name": {name},
            "image": {image},
            "desc": {desc},
            "price": {price}
          }

          console.log(newCandy)
          fetch("http://localhost:3000/candies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandy)
          })
          .then(resp => resp.json())
          .then(data => setCandies((prev) =>[...prev, data]))
    }

    



    return (
        <div>
            <form action="">
                <label>Name:
                    <input onChange={handleName} type="text" name="name"></input>
                </label>
                <label>Image Url
                    <input onChange={handleImage} type="text" name="image"></input>
                </label>
                <label>Description
                    <input onChange={handleDesc} type="text" name="desc"></input>
                </label>
                <label>Price
                    <input onChange={handlePrice} type="number" name="price"></input>
                </label>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}

