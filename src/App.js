import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./Map";
/*
class Map extends Component {
	render() {
		const GMapThailand = withScriptjs(withGoogleMap((props) => {
      		return(<GoogleMap
    							defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        						defaultZoom = { 13 }
     		 			>
								{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
						</GoogleMap>
						);
		}));
		return(
      		<div>
        			<GMapThailand
          			containerElement={ <div style={{ height: '500px', width: '500px' }} /> }
          			mapElement={ <div style={{ height: '100%' }} /> }
       		 	/>
      		</div>
   		);
	}
}
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Top-menu">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>PRICES</button>
        </div>
        <MapContainer />
        <header className="App-header">
          <p>Select stops on your journey</p>
        </header>
      </div>
    );
  }
}

export default App;
