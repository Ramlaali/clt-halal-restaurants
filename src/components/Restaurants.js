import React, { useState, useEffect } from "react"

function Restaurants(){


    const [restaurants, setRestaurants]  = useState([])
    useEffect(()=> {
        
            fetch("http://localhost:9393/restaurants")
            .then((response) => response.json())
            .then(setRestaurants)
        }, []);  


    return(
        <div>
            <h1>Hello</h1>
            {restaurants.map(restaurant => <h1>{restaurant.name}</h1>)}
        </div>
    )
//     return(
//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     )

}

export default Restaurants