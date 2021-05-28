<template>
  <!-- you define your Vue template here -->
  <q-card class="my-card no-margin full-height">
    <img
      style="height: 70%"
      :src="kaka.image"
    />

    <q-card-section class="q-pa-sm">
      <div class="text-h6">{{kaka.title}}</div>
      <div class="text-subtitle2">
        {{kaka.previewDescription}}
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
