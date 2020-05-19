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
         <input  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="nameFilter">
         <datalist id="hikes">
           <option v-for="hike in hikes ">{{hike.name}}</option>
         </datalist>
         <br>
         <button v-on:click="sortByName()">Sort by name</button>
         <button v-on:click="sortByMiles()">Sort by miles</button>
         <br>
         <br>
          <div class="row">
            <div class="col-sm-3" v-for="hike in filterBy(hikes, nameFilter, 'name')" v-on:click="currentHike = hike" v-bind:class="{selected: currentHike === hike}">
            <div v-for="hike in orderBy(hikes, sortAttribute, 1)" v-on:click="currentHike = hike" v-bind:class="{selected: currentHike === hike}">

            </div>
              <div class="card">
                <div class="image">
                  <img v-bind:src="hike.picture">
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h2><a v-bind:href="`/hikes/${hike.id}`">{{hike.name}}</a></h2>
                    <p>{{hike.miles}} miles</p>
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
h5 {
  color: black
}
</style>

<script>

import axios from 'axios';
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: `Hikes`,
      hikes: [],
      currentHike: {},
      nameFilter: '',
      sortAttribute: '',
      hike: []
    };
  },
  created: function() {
    axios.get("/api/hikes").then(response => {
      console.log(response.data);
      this.hikes = response.data;
    });
  },
  methods: {
    sortByName: function() {
      console.log('ordering by Name');
      this.sortAttribute = 'name';
    },
    sortByMiles: function() {
      console.log('ordering by miles');
      this.sortAttribute = 'miles';
    },
  }
};
</script>
