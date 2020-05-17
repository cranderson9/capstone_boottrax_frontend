<template>
  <!-- Map -->
  <header class="masthead" id="#map">
    <br>
    <br>
    <br>
    <br>
    <div class="d-flex justify-content-center ">
      <h1>Find a Spot to Hike</h1>
    </div>
    <div class="d-flex justify-content-center">
      <div id= 'map'></div>
    </div>
  </header> 

</template>

<style>
#map { position: absolute; top: 10; bottom: 10; height: 85%; width: 85%; margin: auto; }

</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      
    };
  },
  mounted: function() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-88.228928, 43.521030], // starting position
      zoom: 10 // starting zoom
    });
    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    ); 
  },
  methods: {}
};
</script>

