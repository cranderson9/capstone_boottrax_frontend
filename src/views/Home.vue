<template>
  <div class="home">
    <!-- Banner -->
    <section id="banner">
      <div class="inner">
        <div class="logo"><span class="icon fa-gem"></span></div>
        <h2>BootTrax</h2>
        <p>The hike doesn't stop after you leave the trail</a></p>
    <a href="/hikes/new" class="button primary">Log a hike</a>
      </div>
    </section>

   

      

    
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
  },
  methods: {}
};
</script>
