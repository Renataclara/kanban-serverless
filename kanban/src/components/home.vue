<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
         <div class="col-sm-12">
           <addquestion></addquestion>
         </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
           <mainlist></mainlist>
           <router-view></router-view>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import addquestion from '@/components/addquestion'
import mainlist from '@/components/mainlist'

export default {
  components: {
    Navbar,
    addquestion,
    mainlist
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
