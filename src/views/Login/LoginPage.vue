<template>
  <Navbar/>
  <Service/>
  <Hero/>
  <DetailBasic/>
</template>


<script>
import Navbar from '@/components/Navbar'
import Service from '@/components/Service'
import Hero from '@/components/Hero'
import DetailBasic from '@/components/DetailBasic1'

export default {
  name: 'LoginIndex',
  components: {
    Navbar,
    Service,
    Hero,
    DetailBasic,
  },
}
</script>