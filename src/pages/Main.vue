<template>
  <div class="q-pa-md">
    <div class="row ">
      <div
        class="col-3 q-pa-md"
        v-for="n in cakeslist"
        :key="n"
      >
        <cakecard :kaka="n" />

      </div>
    </div>
  </div>
</template>

<script>
import cakecard from '../components/popup_cakes'
import db from '../assets/db.json'



export default {
  name: "PageIndex",
  data () {
    return {
      alert: false,
      cakeslist: db.cakes,
      title: db.cakes[0].title
    }
  },
  components: {
    cakecard

  }


};
</script>
