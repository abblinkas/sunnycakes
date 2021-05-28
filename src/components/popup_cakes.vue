<template>
  <div class="q-pa-none full-height">
    <!-- you define your Vue template here -->
    <q-card
      class="my-card no-margin full-height"
      @click="alert = true"
    >
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

    <q-dialog v-model="alert">
      <q-card
        class="my-card"
        flat
        bordered
      >
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <!-- <div class="text-overline">Overline</div> -->
            <div class="text-h5 q-mt-sm q-mb-xs">{{kaka.title}}</div>
            <div class="text-caption text-black">
              {{kaka.detailDescription}}
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              style="height: 100%"
              :src="kaka.image"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
            flat
            round
            icon="event"
          />
          <q-btn flat>
            7:30PM
          </q-btn>
          <q-btn
            flat
            color="primary"
          >
            Reserve
          </q-btn>
        </q-card-actions>
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
    name: 'cakecard',
    props: ['kaka']
  };


</script>

<style></style>
