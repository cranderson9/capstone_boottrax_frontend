<template>
  <!-- Index -->
      <header class="masthead">
        <br>
        <br>
        <br>
       
        <div class="center" id="show">
            <img v-bind:src="hike.picture">
              <h2>{{hike.name}}</h2>
              <h5>{{hike.miles}} miles</h5>
              <p>{{hike.notes}}</p>
              <button class="btn btn-primary" v-on:click="editHike()" type="button">Edit this hike</button>   
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
  methods: {
    editHike() {
      console.log('going to edit the hike')
      this.$router.push(`/hikes/${this.$route.params.id}/edit`)
    }
  }
};
</script>
