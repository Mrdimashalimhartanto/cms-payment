<template>
  <!-- ======= Header ======= -->
  <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div class="container">
         <!-- <a class="navbar-brand logo-text" href="#">e-servicing</a>  -->
        <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/register">Register</router-link>
                </li>
            </ul>
        </div> 
    </div> 
  </nav>
 <!-- End Header -->
 </template>


<script>
export default {
  name: 'NavbarIndex',
  // methods: {
  //   login() { 
  //     this.$router.push()
  //   }
  // }
}
</script>