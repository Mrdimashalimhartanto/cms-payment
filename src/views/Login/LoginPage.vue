<template>
  <Navbar/>
  <Hero2/>
  <Footer/>
  <!-- <Jumbotron/> -->
  <!-- <Service/>
  <Hero/>
  <DetailBasic/> -->
</template>


<script>
import Navbar from '@/components/Navbar'
import Hero2 from '@/components/Hero2'
import Footer from '@/components/Footer'
// import Jumbotron from '@/components/Jumbotron'
// import Service from '@/components/Service'
// import Hero from '@/components/Hero'
// import DetailBasic from '@/components/DetailBasic1'

export default {
  name: 'LoginIndex',
  components: {
    Navbar,
    Hero2,
    Footer,
    // Jumbotron,
    // Service,
    // Hero,
    // DetailBasic,
  },
}
</script>