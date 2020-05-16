    import React, {useState, useEffect} from 'react';

    // fetch the data from Collection
    function listenLocations(){
        const [locations,setLocations] = useState([])
        useEffect(()=>{
    firebase.firestore().collection("locatios")
    .onSnapshot((snapshot) =>{
        const posns = snapshot.docs.map((doc)=>({
            geoPoint: doc.geoPoint,
            ...doc.data()
        }))
        setLocations(posns)
        })
    },[])
    return locations
}
