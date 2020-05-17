<template>

<div id="app">
    <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/">BootTrax</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a v-if="isLoggedIn()" class="nav-link js-scroll-trigger" href="/hikes">All Hikes</a></li>
                        <li class="nav-item"><a v-if="isLoggedIn()" class="nav-link js-scroll-trigger" href="../#new-hike">Add a Hike</a></li>
                        <li class="nav-item"><a v-if="isLoggedIn()" class="nav-link js-scroll-trigger" href="../#friends">Friends</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="../#map">Where to hike</a></li>
                        <li class="nav-item"><a v-if="!isLoggedIn()" class="nav-link js-scroll-trigger" href="/login">Login</a></li>
                        <li class="/login"><a v-if="isLoggedIn()" class="nav-link js-scroll-trigger" href="/logout">Logout</a></li>
                        <li class="nav-item"><a v-if="!isLoggedIn()" class="nav-link js-scroll-trigger" href="/signup">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <router-view/>
        

       
        <!-- Footer-->
        <footer class="footer bg-black small text-center text-white-50"><div class="container">Copyright © Cale Anderson 2020</div></footer>
  
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