<template>
  <div class="home">
     <!-- Masthead -->
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">BootTrax</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">The hike doesn't stop when you leave the trail</h2>
                    <a class="btn btn-primary js-scroll-trigger" href="#new-hike">Add a hike</a>
                </div>
            </div>
        </header>
      <!-- New hike-->
        <section class="signup-section" id="new-hike">
          <div class="container">
              <div class="row">
                  <div class="col-md-10 col-lg-8 mx-auto text-center">
                    <h1> Name of hike:<input type='text' v-model='name'></h1>
                    <h1> Miles:<input type='text' v-model='miles'></h1>
                    <h1> Notes:<input type='text' v-model='notes'></h1>
                    <button v-on:click='newHike()'>Save Hike</button>
                  </div>
              </div>
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

      miles: "",
      name: "",
      notes: "",
      pictures: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {}
};
</script>