import React, { useState, useEffect } from 'react'
import 'Hotel.css'
function Hotel({hotel}) {
const [showMore,setShowMore] = useState(true)
    return (
        <div className="hotel">
            {hotel.name}
            <button onClick={()=> setShowMore(!showMore)}> {showMore ? 'Show more' : 'Show less'}</button>
        </div>
    )
}

export default Hotel
