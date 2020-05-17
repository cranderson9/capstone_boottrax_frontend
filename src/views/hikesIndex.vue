<template>
  <!-- Index -->
      <header class="masthead">
        <br>
        <br>
        <br>
        <br>
        <div class="mx-auto text-center">
        <h1 class="mx-auto my-0 text-uppercase">All Hikes</h1>
        <br>
        </div>
        <div class="container" >
         
          <div class="row">
            <div class="col-sm-3" v-for="hike in hikes">
              <div class="card">
                <div class="image">
                  <img v-bind:src="hike.picture">
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h2><a v-bind:href="`/hikes/${hike.id}`">{{hike.name}}</a></h2>
                    <h5>{{hike.miles}} miles</h5>
                </div>
                <div class="content">
                  <p>{{hike.notes}}</p>
                </div>
                  </div>
              </div>
          <br>
            </div>
          </div>
        </div>
        
      </header>
  
</template>


<style>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1 {
  align-items: center;
}
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: `Hikes`,
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
