

<template>
  <div class="New Hike">
    <!-- <p> Starting location:<input type='text' v-model='startLocation'></p>
    <p> End location:<input type='text' v-model='endLocation'></p> -->
    <p> Name of hike:<input type='text' v-model='name'></p>
    <p> Miles:<input type='text' v-model='miles'></p>
    <p> Notes:<input type='text' v-model='notes'></p>
    <button v-on:click='newHike()'>Save Hike</button>
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
      message: "Log a hike",
      miles: "",
      name: "",
      notes: "",
      pictures: "",
      errors: [],
    };
  },
  mounted: function() {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    // mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
    // var map = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [-96, 37.8], // starting position
    //   zoom: 10 // starting zoom
    // });
    // // Add geolocate control to the map.
    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true
    //     },
    //     trackUserLocation: true
    //   })
    // ); 
  },
  methods: {
    newHike: function() {
      console.log('starting a hike');
      var params = {
        notes: this.notes, 
        name: this.name, 
        miles: this.miles,
        pictures: this.pictures
      };
      axios.post('/api/hikes', params).then(response => {
        console.log(response.data);
        this.$router.push("/hikes/pictures");
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      })
    },
  }
};
</script>