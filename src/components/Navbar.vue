<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="#" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="https://www.ciputralife.com/cfind/source/images/logo-white.png" alt="">
        <!-- <h1>CMS PAYMENT</h1> -->
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link class="active" to="/">Beranda</router-link></li>
          <li><router-link to="/tentang-kami">Tentang Kami</router-link></li>
          <li><router-link to="/register">Produk</router-link></li>
          <li><a href="#">Pertanyaan</a></li>
          <li><a href="#">Daftar</a></li>
          <li><a class="get-a-quote" href="#">Masuk</a></li>
        </ul>
      </nav>
      <!-- .navbar -->

    </div>
  </header>
 <!-- End Header -->
 </template>


<script>
export default {
  name: 'NavbarIndex',
}
</script>