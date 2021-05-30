<template>
  <div>
    <div class="row q-my-sm">
      <span class="q-mr-lg text1"> {{numb}} </span>
      <span class="q-mr-lg text2"> {{orders.title }} </span>
      <div class="row justify-end dense">
        <q-btn
          color="red"
          label="-"
          class="q-mr-lg"
          @click="deacrease"
        />
        <q-btn
          color="green"
          class="q-mr-lg"
          label="+"
          @click="increase"
        />
      </div>
      <span class="text1">{{prize}}kr</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numb: 1
    }
  },
  name: "order",
  props: ["orders"],
  methods: {
    increase () {
      this.numb++
      this.$store.commit("UPDATE_ITEM", [this.orders.id, this.numb])
    },
    deacrease () {
      this.numb--
      this.$store.commit("UPDATE_ITEM", [this.orders.id, this.numb])
    },
  },
  computed: {
    prize () {
      return this.orders.price * this.numb
    }
  }
};
</script>

<style>
.text1 {
  font-size: 20px;
  font-weight: 700;
}
.text2 {
  font-size: 20px;
  font-weight: 400;
}
</style>
