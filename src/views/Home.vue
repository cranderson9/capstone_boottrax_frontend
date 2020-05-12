<template>
  <div class="home">
    <h1>{{ message }}</h1>
    
    
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Home",
      users: [],
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      console.log(response.data);
      this.users = response.data;
    });
  },
  methods: {}
};
</script>
