import React,{useState} from 'react'

function Subscription({hotelname}) {
    const [subscribe,setSubscribe] = useState(false)
    
    return (
        <div>
           <button onClick={()=>setSubscribe(true) }> Request more info about {hotelname}</button>
           {subscribe && 
           <>
                <input type="email" />
                <button disabled >Submit</button>
                </>
                 }
        </div>
    )
}

export default Subscription;
