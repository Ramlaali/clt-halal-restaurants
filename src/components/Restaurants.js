import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


function Restaurants(){


    const [restaurants, setRestaurants]  = useState([])
    useEffect(()=> {
        
            fetch("http://localhost:9393/restaurants")
            .then((response) => response.json())
            .then(setRestaurants)
        }, []);  


    return(

        <div>
            
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={restaurants.map(restaurant => <h1>{restaurant.img_url}</h1>)} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurants.map(restaurant => <h2>{restaurant.name}</h2>)}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
            {/* {restaurants.map(restaurant => <h1>{restaurant.name}</h1>)} */}
        </div>
    )


}

export default Restaurants