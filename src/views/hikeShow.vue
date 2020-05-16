<template>
  <!-- Show -->
      <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
              <div id="show">
                <p>id: {{hike.id}}</p>
                <p>Miles: {{hike.miles}}</p>
                <p>Notes: {{hike.notes}}</p>
                <img v-bind:src="hike.pictures[0] && hike.pictures[0].picture_file">
              </div>
            </div>
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
  methods: {}
};
</script>
