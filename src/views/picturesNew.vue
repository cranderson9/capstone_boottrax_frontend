

<template>
  <div class="New Hike">
    <h1>{{ message }}</h1>
    <!-- <p> Starting location:<input type='text' v-model='startLocation'></p>
    <p> End location:<input type='text' v-model='endLocation'></p> -->
    <p> Picture File:<input type='text' v-model='picture_file'></p>
    <p> Comments:<input type='text' v-model='comments'></p>
  
    <p><button v-on:click='addPictures()'>Add Pictures</button></p>
    <div id= 'map'></div>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Add Pictures to your hike",
      errors: [],
      picture_file: "",
      comments: ""
    };
  },
  created: function() {
  },
  methods: {
    addPictures: function() {
      console.log('adding pictures');
      var params = {
        picture_file: this.picture_file,
        comments: this.comments
      };
      axios.post('/api/pictures', params).then(response => {
        console.log(response.data);
        this.$router.push("/hikes");
      }).catch(error => {
        this.errors = error.response.data.errors;
        this.status = error.response.status;
      })
    },
  }
};
</script>