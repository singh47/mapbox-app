import * as React from 'react';
import './Mapbox1.scss';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
// import "mapbox-gl/dist/mapbox-gl.css";
// import { MAP_BOX_TOKEN } from "../../utils/constants";
import store from '../../store';
import { useSelector, connect } from 'react-redux';
//import { MapboxStyle, MapRef, MapLayerMouseEvent} from 'react-map-gl';
//import {useRef} from 'react';
//import bbox from '@turf/bbox';
import {useState} from 'react';

function MapboxDemo1(props) {
  console.log('Bob the builder....');
  const MAP_BOX_TOKEN =
    'pk.eyJ1IjoiZXJpY2tuMjMiLCJhIjoiY2w5ZWNhdnJ0NHRlbzN1bXg2amF0M3Z0ZyJ9.vKBBr7kcVq35_rLhMbfyQA';
  var long= -99;
  var latt= 52;
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: props.long,
        },
      },
    ],
  };



  //  const onClick= e => {
  //   setPopupInfo(e);
  //  }

  //  const mapRef = useRef();
  //  const onClick = (event) => {
  //   console.log(event);
  //   const feature = event.lngLat;
  //   console.log(feature.lng);
  //   if (feature) {
  //     // calculate the bounding box of the feature
  //     //const [minLng, minLat, maxLng, maxLat] =  //bbox(feature);

  //     mapRef.current.fitBounds(
  //       [
  //         [feature.lng, feature.lat],
  //         [feature.lng, feature.lat]
  //       ],
  //       {padding: 40, duration: 1000}
  //     );
  //   }
  // };

  const layerStyle = {
    id: 'outline',
    type: 'line',
    source: 'maine',
    layout: {},
    paint: {
      'line-color': '#000',
      'line-width': 3,
    },
  };

  const addLayer = {
    id: 'fill',
    type: 'fill',
    // source: 'maine', // reference the data source
    layout: {},
    paint: {
      'fill-color': '#0080ff', // blue color fill
      'fill-opacity': 0.5,
    },
    // viewState:{
    //   'longitude': long,
    //   'latitude': latt,
    //   'zoom': 5.4,
    // }
  };

  return (
    <Map
      initialViewState={{
        longitude: -106,
        latitude: 52,
        // longitude: long,
        // latitude: latt,
        zoom: 5.4,
      }}
      style={{ width: 'auto', height: '90vh' }}
      mapStyle="mapbox://styles/erickn23/cl9f0c0go001f14p7ct0oqbqt"
      mapboxAccessToken={MAP_BOX_TOKEN}
      type="geojson"
      //onClick={onClick}
      data={{
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          // These coordinates outline Maine.
          coordinates: [],
        },
      }}
      paint={{
        line_color: '#000',
        line_width: 3,
      }}
      // viewState={{
      //   longitude: long,
      //   latitude: latt,
      //   zoom: 5.4,
      // }}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...addLayer} />
        <Layer {...layerStyle} />
      </Source>

        <NavigationControl />
    </Map>
  );
}

const mapStateToProps = (store) => {
  return {
    long: store,
  };
};

export default connect(mapStateToProps)(MapboxDemo1);
