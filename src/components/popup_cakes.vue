<template>
  <!-- you define your Vue template here -->
  <q-card class="my-card no-margin full-height">
    <img
      style="height: 70%"
      src="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg"
    />

    <q-card-section class="q-pa-sm">
      <div class="text-h6">{{kaka}}</div>
      <div class="text-subtitle2">
        by John Doeonpsdnicnsincidsnciopnspc
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none"> </q-card-section>
  </q-card>
</template>

<script>
export default
  {
    name: 'cakecard',
    props: ['kaka']
  };


</script>

<style></style>
