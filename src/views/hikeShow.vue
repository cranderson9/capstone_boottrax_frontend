<template>
  <div class="Home">
    <h1>{{ message }}</h1>
    <div>
      <p>id: {{hike.id}}</p>
      <p>Name: {{hike.name}}</p>
      <p>Miles: {{hike.miles}}</p>
      <p>Notes: {{hike.notes}}</p>
          <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[0] && hike.pictures[0].picture_file">
        <div class="caption">
          <p>comments here</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[1] && hike.pictures[1].picture_file"> 
        <div class="caption">
          <p>Comments here</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img v-bind:src="hike.pictures[2] && hike.pictures[2].picture_file"> 
        <div class="caption">
          <p>comments here</p>
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
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Here is your hike",
      hike: []
    };
  },
  created: function() {
    axios.get(`api/hikes/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.hike = response.data;
    });
  },
  methods: {}
};
</script>
