<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BootTrax</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/hikes">All Hikes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/hikes/new">New Hike</a>
      </li>
      <li class="nav-item">
        <a v-if="!isLoggedIn()" class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a v-if="isLoggedIn()" class="nav-link" href="/logout">Logout</a>
      </li>
      <li class="nav-item">
        <a v-if="!isLoggedIn()" class="nav-link" href="/signup">Signup</a>
      </li>
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      // console.log('i am checking login status');
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    },
  }
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
