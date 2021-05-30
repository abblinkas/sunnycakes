<template>
  <div class="q-pa-md">
    <div class="row ">
      <div
        class="col-3 q-pa-md"
        v-for="n in cakeslist"
        :key="n"
      >
        <staffcard :kaka="n" />

      </div>
    </div>
  </div>
</template>

<script>
import staffcard from '../components/members'
import db from '../assets/db.json'



export default {
  name: "PageIndex",
  data () {
    return {
      alert: false,
      cakeslist: db.staff,
      title: db.cakes[0].title
    }
  },
  components: {
    staffcard

  }


};
</script>