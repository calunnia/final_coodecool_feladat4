import React, { useState, useEffect } from 'react'
import './Hotel.css'
import Subscription  from '../Subscription/Subscription.jsx'

function Hotel({hotel}) {
const [showMore,setShowMore] = useState(true)
    return (
        <div className="hotel">
           <p> {hotel.name}</p>
           <button onClick={()=> setShowMore(!showMore)}> {showMore ? 'Show more' : 'Show less'}</button>
           { !showMore &&
           <div>
                {hotel.city} ({hotel.stars})
                <Subscription hotelname={hotel.name}/>
           </div>
               

           }
        </div>
    )
}

export default Hotel
