import React, {useState, useEffect} from 'react';
import LoadingMask from '../LoadingMask/LoadingMask.jsx';
import Hotel from '../Hotel/Hotel.jsx';
import hotelData from '../../data/hoteldata.js'  //'../data/hoteldata.js'

function Hotels() {

 const [data, setData]   = useState ([]);
 const [isShow,setIShow] = useState (false);

 useEffect(() => {
    setIShow(true)
     fetch('https://api/hotels')
     .then( response => response.json() )
     .then( data => {
       
       /*  élő API-nél ezt irnám
        setData(data);
        setIShow(false); 
        return data
       */

         setData(hotelData);
         setIShow(false); 
         return hotelData
        
        } )
     .catch( err => {
         //setData(null);
         
         //mivel nincs API minig error lesz ezert irtam a kov sort. egyebkent az elozo lenne.
         setData(hotelData);
         
         setIShow(false);
          return (null)} )
    // .finnaly( res => setIShow(false))
     
 }, [data]);


console.log('data=',data);

    return (<>
        { data && isShow 
            ? <LoadingMask />
            :
       
                    <div>
                        {
                            data.map( (hotel, i) => 
                                 <> 
                                  <Hotel hotel={hotel} key={i.toString()} />   
                                  </>
                            )
                        }
                    </div>
        }
    </>)
}

export default Hotels

