<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <div v-bind:key=hike.id v-for="hike in hikes"> 
      <p>id: {{hike.id}}</p>
      <p>user id: {{hike.user_id}}</p>
      <p>Status: {{hike.status}}</p>
      <p>Start Location: {{hike.start_location}}</p>
      <p>End Location: {{hike.End_location}}</p>
      <p>Miles: {{hike.miles}}</p>
      <p>Notes: {{hike.notes}}</p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Here are all your hikes",
      hikes: []
    };
  },
  created: function() {
    axios.get("/api/hikes").then(response => {
      console.log(response.data);
      this.hikes = response.data;
    });
  },
  methods: {}
};
</script>
