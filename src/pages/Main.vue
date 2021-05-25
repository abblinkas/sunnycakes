<template>
  <div class="q-pa-md">
    <div class="row ">
      <div class="col-3 q-pa-md">
        <q-card @click="alert = true" class="my-card no-margin full-height">
          <img
            style="height: 70%"
            src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
          />

          <q-card-section class="q-pa-sm">
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">
              by John Doeonpsdnicnsincidsnciopnspc
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-pa-md">
        <q-card class="my-card no-margin full-height">
          <img
            style="height: 70%"
            src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-pa-md">
        <q-card class="my-card no-margin full-height">
          <img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            style="height: 70%"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-pa-md">
        <q-card class="my-card no-margin full-height">
          <img
            style="height: 70%"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </div>
      <div class="col-3 q-pa-md">
        <q-card class="my-card no-margin full-height">
          <img
            style="height: 70%"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="alert">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none"> </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      alert: false
    };
  }
};
</script>
