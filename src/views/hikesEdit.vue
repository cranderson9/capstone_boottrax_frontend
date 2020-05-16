<template>
  <div class="edit hike">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Hike</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="hike.name">
        </div>
        <div class="form-group">
          <label>Miles:</label>
          <input type="text" class="form-control" v-model="hike.miles">
        </div>
        <div class="form-group">
          <label>Comments:</label>
          <input type="text" class="form-control" v-model="hike.notes">
        </div>
        <input type="submit" class="btn btn-primary" value="Save">
      </form>
      <br>
      <button class="btn btn-danger" v-on:click="deleteHike()">Delete this hike</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hike: {
        name: "",
        miles: "",
        notes: "",
      },
      errors: []
    };
  },
  created: function() {
    axios.get(`/api/hikes/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.hike = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.hike.name,
        miles: this.hike.miles,
        notes: this.hike.notes,
      };
      axios.patch(`/api/hikes/${this.hike.id}`, params).then(response => {
        console.log(response.data);
        this.hike = response.data;
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    deleteHike: function() {
      console.log("delete the hike")
      axios.delete(`/api/hikes/${this.hikes.id}`).then(response => {
        console.log(response.data);
        this.$router.push('/hikes')
      });
    }
  }
};
</script>