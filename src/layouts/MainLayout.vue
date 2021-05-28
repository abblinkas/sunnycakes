<template>
  <q-layout
    view="lHh Lpr lFf"
    class="layout"
  >
    <q-header
      elevated
      class="header "
    >
      <q-toolbar v-if="$router.currentRoute.path !== '/login' ">
        <img
          class="rotateimg"
          src="../assets/cake.png"
          alt="cake"
          height="75px"
          width="75px"
        >

        <q-toolbar-title class="title">Sunnycakes</q-toolbar-title>
        <q-btn
          flat
          @click="drawerRight = !drawerRight"
          round
          dense
          icon="shopping_cart"
          class="shoppingCart"
          size="xl"
        />

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',

  data () {
    return {

    }
  }
}
</script>

<style>
.layout {
  background-color: #90baf5;
}
.header {
  background-color: #1451a8;
}
.rotateimg {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
}
.title {
  text-align: center;
  font-size: 40px;
  color: #ffcb66;
  font-weight: 700;
}
.shoppingCart {
  color: #ffcb66;
}
</style>

