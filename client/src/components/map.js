import React, {useState, useEffect} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import axios from 'axios'

function Map ({coordinates}) {
    const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);
    const [testCenterList, setTestCenterList] = useState([]);
    const [hospitalList, setHospitalList] = useState([]);

    useEffect(()=>{

        // axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.05223,-118.24368&radius=1500&type=hospital&key="+ process.env.REACT_APP_GOOGLE_API_KEY)
        //     .then((res)=>setHospitalList(res.results))
        //     .catch((err)=>console.log("Failed to retrieve list of hospitals"))

        axios.get("http://localhost:8000/api/places")
            .then(list=>{setTestCenterList(list.data); console.log(list.data)})
            .catch(err=>console.log(err));
        }, [coordinates])

        return (
            <GoogleMap 
            defaultZoom={10} 
            center={coordinates}
            > 
                {testCenterList !== [] && testCenterList.map((testCenter, index) => 
                    <Marker
                    key={testCenter._id}  
                    position= {{
                        lat: testCenter.coordinates[0],
                            lng: testCenter.coordinates[1]
                        }}
                        onClick = {() => {
                            setSelectedLocationIndex(index)
                        }}
                        zIndex = {1}
                        // icon = {{
                        //     url: "https://tse3.mm.bing.net/th?id=OIP.-Q3s48Hgqq__wPS6DYgeeAHaHa&pid=Api",
                        //     scaledSize: new window.google.maps.Size(25,25)
                        // }}
                    >
                {selectedLocationIndex === index && (
                    <InfoWindow
                        // zIndex = {2}
                        // position={{
                        //     lat:testCenterList[selectedLocationIndex].coordinates[0],
                        //     lng:testCenterList[selectedLocationIndex].coordinates[1]
                        // }}
                        onCloseClick = {()=>{
                            setSelectedLocationIndex(null);
                        }}
                    >
                        <div>
                            <h3>{testCenterList[selectedLocationIndex].name}</h3>
                            <p>{testCenterList[selectedLocationIndex].streetAddress}</p>
                            <p>{testCenterList[selectedLocationIndex].city} {testCenterList[selectedLocationIndex].zipcode}</p>
                            <p>{testCenterList[selectedLocationIndex].phoneNumber}</p>
                            <a href = {testCenterList[selectedLocationIndex].website}>Visit Website</a>
                        </div>
                    </InfoWindow>
                )}
                </Marker>
             )}

        </GoogleMap>

)
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default WrappedMap;

