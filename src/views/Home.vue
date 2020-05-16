<template>
  <div class="home">
     <!-- Masthead -->
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">BootTrax</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">The hike doesn't stop when you leave the trail</h2>
                    <a class="btn btn-primary js-scroll-trigger" v-if="isLoggedIn()" href="#new-hike">Add a hike</a>
                    <a class="btn btn-primary js-scroll-trigger" v-if="!isLoggedIn()" href="/login">Login</a>
                </div>
            </div>
        </header>
      <!-- New hike-->
      <header class="masthead" id='new-hike'>
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                                 <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>ADD A HIKE</h1>
        
        <div class="form-group">
          <label>Name of Hike</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Miles</label>
          <input type="text" class="form-control" v-model="miles">
        </div>
        
        <div class="form-group">
          <label>Comments </label>
          <input type="text" class="form-control" v-model="notes">
        </div>
        <a class="btn btn-primary js-scroll-trigger" v-on:click="newHike()" href="#add-pictures">Add a hike</a>
      </form>
    </div>
  </div>

                </div>
            </div>
        </header>
      <!-- Add Pictures-->
      <header  class="masthead"  id='add-pictures'>
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                                 <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>PICTURES</h1>
        
        <div class="form-group">
          <label>Picture URL</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Comments</label>
          <input type="text" class="form-control" v-model="miles">
        </div>
        <a class="btn btn-primary js-scroll-trigger" v-on:click="addPictures()" href="/hikes">Add a hike</a>
      </form>
    </div>
  </div>

                </div>
            </div>
        </header>

        <!-- !-- Friends -->
        <header class="masthead" id="friends">
            <div class="container d-flex h-100 align-items-center">
                <div class="table">
                    <table class="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Miles</th>
                        </tr>
                      </thead>
                      <tbody div v-bind:key="user.id" v-for="user in users">
                        <tr>
                          <td>{{user.first_name}}</td>
                          <td>{{user.last_name}}</td>
                          <td>{{user.total_miles}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </header> 
        <!-- !-- Map -->
        <header class="masthead" id="#map">
                <div class="d-flex justify-content-center">
                  <div id= 'map'></div>
                </div>
            
        </header> 
    
        
        
  </div>

</template>

<style>

#map { position: absolute; top: 10; bottom: 10; height: 85%; width: 85%; margin: auto; }
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      miles: "",
      name: "",
      notes: "",
      errors: [],
      picture_file: "",
      comments: "",
      users: []
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
  created: function() {
    axios.get("/api/users").then(response => {
      console.log(response.data);
      this.users = response.data;
    })
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
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      });
    },
    isLoggedIn: function() {
      // console.log('i am checking login status');
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    },
    addPictures: function() {
      console.log('adding pictures');
      var params = {
        picture_file: this.picture_file,
        comments: this.comments
      };
      axios.post('/api/pictures', params).then(response => {
        console.log(response.data);
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      })
    }
  }
};
</script>