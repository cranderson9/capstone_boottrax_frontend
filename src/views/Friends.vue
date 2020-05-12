<template>
  <div class="friends">
			<!-- Banner -->
    <section id="banner">
      <div class="inner">
        <div class="logo"><span class="icon fa-gem"></span></div>
        <h2>Friends</h2>
        <p>Now you can see how much more your friends are hiking than you</a></p>
      </div>
    </section>
      
      
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Miles</th>
        </tr>
      </thead>
      <tbody div v-bind:key="user.id" v-for="user in users">
        <tr>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.total_miles}}</td>
        </tr>
      </tbody>
    </table>
    
  </div>

  
  
</template>

<style>
</style>

<script>

import axios from 'axios';

export default {
  data: function() {
    return {
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
