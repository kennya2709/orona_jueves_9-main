import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";




export default class Maps extends Component{
    render(){
        return(
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyD6bLODTa33MIYUrrAf-ndDlvN-sRQHHx0"}
                    style={{height: "400px", width: "100%"}}
                    zoom={6}
                    center={{lat: 23.990824044350262, lng: -104.61766663068158}}
                    />
            </div>
        )
    }
}