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
          <label>Picture:</label>
          <input type="text" class="form-control" v-model="hike.picture">
        </div>
        <div class="form-group">
          <label>Comments:</label>
          <input type="text" class="form-control" v-model="hike.notes">
        </div>
        <input type="submit" class="btn btn-primary"  value="Save">
      </form>
      <br>
      <button class="btn btn-danger" v-on:click="deleteHike()">Delete this hike</button>
    </div>
    <br>
    <div>
      <a href="javascript:history.go(-1)"> Go Back</a>  
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
        picture: "",
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
        picture: this.hike.picture
      };
      axios.patch(`/api/hikes/${this.hike.id}`, params).then(response => {
        console.log(response.data);
        this.hike = response.data;
        this.$router.push(`/hikes/${this.$route.params.id}`)
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    deleteHike: function() {
      console.log("delete the hike")
      axios.delete(`/api/hikes/${this.hike.id}`).then(response => {
        console.log(response.data);
        this.$router.push('/hikes')
      });
    }
  }
};
</script>