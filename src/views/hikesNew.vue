

<template>
  <div class="New Hike">
    <h1>{{ message }}</h1>
    <button v-on:click='startHike()'>Start New Hike</button>
    <div id= 'map'></div>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Start a new hike",
      start_location: "",
      end_location: "",
      miles: "",
      notes: ""
    };
  },
  mounted: function() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96, 37.8], // starting position
      zoom: 3 // starting zoom
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
  methods: {
    startHike: function() {
      console.log('starting a hike');
      var params = {
        start_location: this.start_location
      };
    }
  }
};
</script>