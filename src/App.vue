<template>
  <div id="app">
    <!-- Page Wrapper -->
    <div id="page-wrapper">

      <!-- Header -->
        <header id="header" class="alt">
          <h1><a href="/">BootTrax</a></h1>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

      <!-- Menu -->
        <nav id="menu">
          <div class="inner">
            <h2>Menu</h2>
            <ul class="links">
              <li><a href="/">Home</a></li>
              <li><a v-if="isLoggedIn()" href="/hikes">All Hikes</a></li>
              <li><a v-if="isLoggedIn()" href="/friends">Friends</a></li>
              <li><a v-if="!isLoggedIn()" href="/login">Log In</a></li>
              <li><a v-if="isLoggedIn()" href="/logout">Logout</a></li>
              <li><a v-if="!isLoggedIn()" href="/signup">Sign Up</a></li>
            </ul>
            <a href="#" class="close">Close</a>
          </div>
        </nav>
      <router-view/> 
      <!-- Wrapper -->
    

      <!-- Footer -->
        <section id="footer">
          <div class="inner">
            <ul class="copyright">
              <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </section>

    </div>
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
</style>
