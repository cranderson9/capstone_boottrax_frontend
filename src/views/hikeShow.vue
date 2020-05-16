<template>
  <!-- Index -->
      <header class="masthead">
        <br>
        <br>
        <br>
        <br>
       
        <div class="container" >
          <div class="image">
            <img v-bind:src="hike.pictures[0] && hike.pictures[0].picture_file">
          </div>
          <div class="card-inner">
            <div class="header">
              <h2>{{hike.name}}</h2>
              <h5>{{hike.miles}} miles</h5>
            </div>
            <div class="content">
              <p>{{hike.notes}}</p>
            </div>
          </div>
          <button class="btn btn-primary" type="button">Edit this hike</button>
        </div>
        
      </header>
  
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
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
