<template>
  <Navbar/>
  <Hero2/>
  <Footer/>
</template>


<script>
import Navbar from '@/components/Navbar'
import Hero2 from '@/components/Hero2'
import Footer from '@/components/Footer'

export default {
  name: 'LoginIndex',
  components: {
    Navbar,
    Hero2,
    Footer,
  },
}
</script>