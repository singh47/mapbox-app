import * as React from "react";
import "./Mapbox1.scss";
import Map, { NavigationControl } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { MAP_BOX_TOKEN } from "../../utils/constants";

function MapboxDemo1() {
   const MAP_BOX_TOKEN="pk.eyJ1IjoiZXJpY2tuMjMiLCJhIjoiY2w5ZWNhdnJ0NHRlbzN1bXg2amF0M3Z0ZyJ9.vKBBr7kcVq35_rLhMbfyQA"
  return (
    <Map
      initialViewState={{
        longitude: -108.04531723573001,
        latitude: 52.998021523969356,
        zoom: 5.103473284690827,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/erickn23/cl9f0c0go001f14p7ct0oqbqt"
      mapboxAccessToken={MAP_BOX_TOKEN}
      // mapboxAccessToken={"12"}
    >
      <NavigationControl />
    </Map>
  );
}

export default MapboxDemo1;
