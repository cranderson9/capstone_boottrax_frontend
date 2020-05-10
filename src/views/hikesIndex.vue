<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <div v-bind:key=hike.id v-for="hike in hikes"> 
      <p>id: {{hike.id}}</p>
      <p>user id: {{hike.user_id}}</p>
      <p>Status: {{hike.status}}</p>
      <p>Start Location: {{hike.start_location}}</p>
      <p>End Location: {{hike.end_location}}</p>
      <p>Miles: {{hike.miles}}</p>
      <p>Notes: {{hike.notes}}</p>
      <!-- <img v-bind:src="hike.pictures[0].picture_file"> -->

      <!-- Picture gallery here  -->
      <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src="https://picsum.photos/id/10/200" alt="Lights" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src="https://picsum.photos/id/1003/200" alt="Nature" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="/w3images/fjords.jpg">
        <img src="https://picsum.photos/id/1006/200" alt="Fjords" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
  </div>
</div>
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
