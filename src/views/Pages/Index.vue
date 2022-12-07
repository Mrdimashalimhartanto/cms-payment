<template>
  <Navbar/>
  <Hero/>
  <Service/>
  <Footer/>
  <!-- <Service/> -->
  <!-- <DetailBasic1/> -->
</template>


<script>
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Footer from '@/components/Footer'
// import Service from '@/components/Service'
// import DetailBasic1 from '@/components/DetailBasic1'
// import Service from '@/components/Service'
// import Hero from '@/components/Hero'
// import DetailBasic from '@/components/DetailBasic1'


export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Hero,
    Service,
    Footer,
    // Service,
    // DetailBasic1
    // Hero,
    // DetailBasic,
  },
}
</script>