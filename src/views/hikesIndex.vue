<template>
  <div class="index">
    <h1>{{ message }}</h1>
    <div v-bind:key=hike.id v-for="hike in hikes"> 
      <p>id: {{hike.id}}</p>
      <p>user id: {{hike.user_id}}</p>
      <p>Miles: {{hike.miles}}</p>
      <p>Notes: {{hike.notes}}</p>
    

      <!-- Picture gallery here  -->
      <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[0] && hike.pictures[0].picture_file"  style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[1] && hike.pictures[1].picture_file"> 
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[2] && hike.pictures[2].picture_file"> 
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      
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
      message: `Here are all your hikes`,
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
