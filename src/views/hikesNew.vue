<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click='startHike()'>Start New Hike</button>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      start_location: "",
      end_location: "",
      miles: "",
      notes: ""
    };
  },
  created: function() {},
  methods: {
    startHike: function() {
      console.log('starting a hike');
      var params = {
        start_location: this.start_location
      }
    }
  }
};
</script>
