import * as React from 'react';
import './Mapbox1.scss';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
import {  connect } from 'react-redux';
import {useRef, useEffect} from 'react';

// import { useSelector } from 'react-redux';
// import {useState, componentDidMount} from 'react';
// import store from '../../store';
// import { CenterFocusStrong } from '@mui/icons-material';
// import { MapboxStyle, MapRef, MapLayerMouseEvent} from 'react-map-gl';
//  import bbox from '@turf/bbox';
// import "mapbox-gl/dist/mapbox-gl.css";
// import { MAP_BOX_TOKEN } from "../../utils/constants";

function MapboxDemo1(props) {
  console.log('Bob the builder....');
  const mapRef = useRef();
  const MAP_BOX_TOKEN =
    'pk.eyJ1IjoiZXJpY2tuMjMiLCJhIjoiY2w5ZWNhdnJ0NHRlbzN1bXg2amF0M3Z0ZyJ9.vKBBr7kcVq35_rLhMbfyQA';
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: props.long.geometry,
        },
      },
    ],
  };

  useEffect(() => {
    if(mapRef.current != null) {
    mapRef.current.flyTo({
      center: props.long.geometry[0][0],
      zoom: 9,
      speed: 1.4,
      curve: 1,
      });
    }
  })

   const onClick= e => {
    // let center = [-118.4107187, 33.9415889]
    console.log("click.....")
    console.log(props.long.geometry[0][0]);
    console.log(mapRef);
    console.log(e.lngLat);

    let lnglat = [e.lngLat.lng, e.lngLat.lat];

      mapRef.current.flyTo({
        center: lnglat,
        zoom: 9,
        speed: 1.4,
        curve: 1,
        });
  }



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
      ref={mapRef}
      style={{ width: 'auto', height: '90vh' }}
      mapStyle="mapbox://styles/erickn23/cl9f0c0go001f14p7ct0oqbqt"
      mapboxAccessToken={MAP_BOX_TOKEN}
      type="geojson"
      onClick={onClick}
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
