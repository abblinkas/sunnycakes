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
    <!-- <biggerCard /> -->
    <!-- <q-dialog v-model="alert">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none"> </q-card-section>
      </q-card>
    </q-dialog> -->
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
