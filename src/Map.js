import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    const style = {
      height: "100vh",
      width: "100vw",
      position: "relative",
      align: "center"
    };
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          zoom={6}
          initialCenter={{
            lat: 13.7563,
            lng: 100.5018
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDb2VfgB8MNuMb9ZFRjlHVWidemNAs_feo"
})(MapContainer);
