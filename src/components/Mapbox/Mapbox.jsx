// import * as React from 'react';
// import './Mapbox1.scss';
// import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
// import {  connect } from 'react-redux';
// import {useRef, useEffect} from 'react';

// // import { useSelector } from 'react-redux';
// // import {useState, componentDidMount} from 'react';
// // import store from '../../store';
// // import { CenterFocusStrong } from '@mui/icons-material';
// // import { MapboxStyle, MapRef, MapLayerMouseEvent} from 'react-map-gl';
// //  import bbox from '@turf/bbox';
// // import "mapbox-gl/dist/mapbox-gl.css";
// // import { MAP_BOX_TOKEN } from "../../utils/constants";

// function MapboxDemo1(props) {
//   console.log('Bob the builder....');
//   const mapRef = useRef();
//   const MAP_BOX_TOKEN =
//     'pk.eyJ1IjoiZXJpY2tuMjMiLCJhIjoiY2w5ZWNhdnJ0NHRlbzN1bXg2amF0M3Z0ZyJ9.vKBBr7kcVq35_rLhMbfyQA';
//   const geojson = {
//     type: 'FeatureCollection',
//     features: [
//       {
//         type: 'Feature',
//         geometry: {
//           type: 'Polygon',
//           coordinates: props.long.geometry,
//         },
//       },
//     ],
//   };

//   useEffect(() => {
//     if(mapRef.current != null) {
//     mapRef.current.flyTo({
//       center: props.long.geometry[0][0],
//       zoom: 9,
//       speed: 1.4,
//       curve: 1,
//       });
//     }
//   })

//    const onClick= e => {
//     // let center = [-118.4107187, 33.9415889]
//     console.log("click.....")
//     console.log(props.long.geometry[0][0]);
//     console.log(mapRef);
//     console.log(e.lngLat);

//     let lnglat = [e.lngLat.lng, e.lngLat.lat];

//       mapRef.current.flyTo({
//         center: lnglat,
//         zoom: 9,
//         speed: 1.4,
//         curve: 1,
//         });
//   }

//   const layerStyle = {
//     id: 'outline',
//     type: 'line',
//     source: 'maine',
//     layout: {},
//     paint: {
//       'line-color': '#000',
//       'line-width': 3,
//     },
//   };

//   const addLayer = {
//     id: 'fill',
//     type: 'fill',
//     // source: 'maine', // reference the data source
//     layout: {},
//     paint: {
//       'fill-color': '#0080ff', // blue color fill
//       'fill-opacity': 0.5,
//     },
//     // viewState:{
//     //   'longitude': long,
//     //   'latitude': latt,
//     //   'zoom': 5.4,
//     // }
//   };

//   return (
//     <Map
//       initialViewState={{
//         longitude: -106,
//         latitude: 52,
//         // longitude: long,
//         // latitude: latt,
//         zoom: 5.4,
//       }}
//       ref={mapRef}
//       style={{ width: 'auto', height: '90vh' }}
//       mapStyle="mapbox://styles/erickn23/cl9f0c0go001f14p7ct0oqbqt"
//       mapboxAccessToken={MAP_BOX_TOKEN}
//       type="geojson"
//       onClick={onClick}
//       data={{
//         type: 'Feature',
//         geometry: {
//           type: 'Polygon',
//           // These coordinates outline Maine.
//           coordinates: [],
//         },
//       }}
//       paint={{
//         line_color: '#000',
//         line_width: 3,
//       }}

//     >
//       <Source id="my-data" type="geojson" data={geojson}>
//         <Layer {...addLayer} />
//         <Layer {...layerStyle} />
//       </Source>

//         <NavigationControl />
//     </Map>
//   );
// }

// const mapStateToProps = (store) => {
//   return {
//     long: store,
//   };
// };

// export default connect(mapStateToProps)(MapboxDemo1);

// **************************************
// This is the updated / cleaned up code

/**
 * This component is responsible for the actual map.
 * The MapBox is use to render the map.
 * The MapBox choropleth style is use for the map.
 * The MapBox 3D style is commented out and can be use as an alternative.
 *
 * This component is passed in the App.js
 */

import * as React from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl";
import { connect } from "react-redux";
import { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import { MAP_BOX_TOKEN, MAP_BOX_STYLE_CHOROPLETH } from "../../utils/constants";
import DetailBox from "../detailbox/DetailBox";
// import { MAP_BOX_TOKEN, MAP_BOX_STYLE_3D } from "../../utils/constants";

const CortevaMap = (props) => {
  console.log(props);

  var geoArray = props.long.geometry;
  var geoType = "Polygon";

  // initial values when not called with props
  if (geoArray ==  null){
    geoArray = [-122.4, 37.8];
    geoType = "Point";
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mapRef = useRef();

  var initialMapZoom = 5;

  var isDesktop = true;

  // mobile specific code
  if(window.innerWidth < 600) {
      initialMapZoom = 3.5;
      isDesktop = false;
  }

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: geoType,
          coordinates: geoArray,
        },
      },
    ],
  };
  
  useEffect(() => {
    if (mapRef.current != null) {
      mapRef.current.flyTo({
        center: props.long.geometry[0][0],
        zoom: 9,
        speed: 1.5, // Original value is 1.4
        curve: 1,
      });
    }
  });

  const onClick = (e) => {

    let lnglat = [e.lngLat.lng, e.lngLat.lat];

    mapRef.current.flyTo({
      center: lnglat,
      zoom: 9,
      speed: 1.5, // Original value is 1.4
      curve: 1,
    });
  };

  const layerStyle = {
    id: "outline",
    type: "line",
    source: "maine",
    layout: {
      // "text-field": "fN",
      // "text-size": 16,
      // "text-offset": [0, -1.5],
    },
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  };

  const addLayer = {
    id: "fill",
    type: "fill",
    layout: {
      // "text-field": ["get", "lnglat"],
      // "text-size": 16,
      // "text-offset": [0, -1.5],
    },
    paint: {
      "fill-color": "#0080ff", // Blue color fill
      "fill-opacity": 0.5,
    },
  };

  /**
   * Saskachewan coordinates for the initial state
   */
  return (
    <Box
      height="100%"
      width="100%"
      minHeight="460px"
      border={`2px solid ${colors.grey[100]}`}
      borderRadius="1px"
      position="relative"
    >
      <DetailBox />
      <Map
        initialViewState={{
          longitude: -105.88885,
          latitude: 54.418583,
          zoom: initialMapZoom,
        }}
        ref={mapRef}
        style={{ width: "auto", height: "100%" }}
        mapStyle={MAP_BOX_STYLE_CHOROPLETH} // Chropleth Render
        // mapStyle={MAP_BOX_STYLE_3D} // 3D Render
        mapboxAccessToken={MAP_BOX_TOKEN}
        type="geojson"
        onClick={onClick}
        data={{
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [],
          },
        }}
        paint={{
          line_color: "#000",
          line_width: 3,
        }}
      >
        <Source id="geoData" type="geojson" data={geojson}>
          <Layer {...addLayer} />
          <Layer {...layerStyle} />
        </Source>
          map.resize();
        <NavigationControl position="bottom-left"/>
      </Map>
    </Box>
  );
};

const mapStateToProps = (store) => {
  return {
    long: store,
  };
};

export default connect(mapStateToProps)(CortevaMap);
