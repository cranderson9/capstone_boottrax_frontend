<template>
<div>
  <!-- !-- Masthead -->
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">BootTrax</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">The hike doesn't stop when you leave the trail</h2>
                    <a class="btn btn-primary js-scroll-trigger" href="#new-hike">Add a hike</a>
                </div>
            </div>
        </header> -->
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