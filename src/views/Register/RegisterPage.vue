<template>
  <Navbar/>
  <Hero3/>
  <Footer/>
</template>


<script>

import Navbar from '@/components/Navbar'
import Hero3 from '@/components/Hero3'
import Footer from '@/components/Footer'


export default {
  name: 'RegisterIndex',
  components: {
    Navbar,
    Hero3,
    Footer,
  },
}
</script>