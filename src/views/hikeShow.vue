<template>
  <!-- Index -->
      <header class="masthead">
        <br>
        <br>
        <br>
        <br>
       <div class="d-flex justify-content-center ">
          <div class="center" id="show">
            <h1>{{hike.name}}</h1>
            <img clas v-bind:src="hike.picture">
            <br>  
              <h5>{{hike.miles}} miles</h5>
              <h5>{{hike.notes}}</h5>
              <button class="btn btn-primary" v-on:click="editHike()" type="button">Edit this hike</button> 
              <br>
              <br>
          <a href="javascript:history.go(-1)"> Go Back</a> 
          </div>  
        </div>
          
        
      </header>
  
</template>

<style>
img {
  width: 100%;
}
h5 {
  color: white
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hike: [],
      message: ""
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
