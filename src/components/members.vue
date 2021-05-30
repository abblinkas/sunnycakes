<template>
  <div class="q-pa-md cards">
    <!-- you define your Vue template here -->
    <q-card
      class="my-card no-margin full-height full-width"
      @click="alert = true"
    >
      <img
        style="height: 70%"
        :src="kaka.avatar"
      />

      <q-card-section class="q-pa-sm">
        <div class="text-h4">{{ kaka.name }}</div>
        <div class="text-h6">
          {{ kaka.role }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>

    <q-dialog v-model="alert">
      <q-card class="my-card">
        <q-card-section>
          <q-card-section class="col-3 flex flex-center">
            <q-img
              style="height: 100%"
              :src="kaka.avatar"
            />
          </q-card-section>
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <!-- <div class="text-overline">Overline</div> -->
          <div
            class="text-h4 q-mb-lg"
            vertical
            align="center"
          >
            {{ kaka.name }}
          </div>
          <div>
            <span class="text-h6 text-bold">Email: </span>
            <span class="text-h6 text-black">{{ kaka.email }}</span>
          </div>
          <div>
            <span class="text-h6 text-bold">Phone: </span>
            <span class="text-h6 text-black">{{ kaka.phone }}</span>
          </div>
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: false
    }
  },
  name: "staffcard",
  props: ["kaka"]
};
</script>

<style>
.card {
  background-color: #ffcb66;
}
</style>
