<template>
  <div class="q-pa-md">
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
export default
  {
    data () {
      return {
        alert: false
      }
    },
    name: 'biggerCard',
    props: ['kaka']
  };
</script>

<style>
</style>