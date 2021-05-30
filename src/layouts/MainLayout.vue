<template>
  <q-layout
    view="hHh Lpr lff"
    class="layout"
    container
    style="height: 100vh"
  >
    <q-header
      elevated
      class="header"
    >
      <q-toolbar v-if="$router.currentRoute.path !== '/login'">
        <q-btn
          v-if="$router.currentRoute.path !== '/staff'"
          @click="redirect('/staff')"
          unelevated
          class="about"
          label="Staff"
          style="width: 7%"
          size="lg"
        />
        <q-btn
          v-if="$router.currentRoute.path !== '/'"
          @click="redirect('/')"
          unelevated
          class="about"
          label="Shop"
          style="width: 7%"
          size="lg"
        />
        <img
          class="rotateimg1"
          src="../assets/cake.png"
          alt="cake"
          height="60px"
          width="60px"
        />
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
    <q-drawer
      side="left"
      v-model="drawerRight"
      bordered
      :width="400"
      :breakpoint="500"
      show-if-above
    >
      <div class="row no-wrap justify-center q-pt-lg">
        <div
          style="width: 100%;"
          class="column items-center"
        >
          <q-avatar size="150px">
            <img src="https://cdn.fakercloud.com/avatars/ganserene_128.jpg" />
          </q-avatar>
          <div class="text-h5 q-mt-md">Linus Kasper</div>

          <q-btn
            class="bottom"
            flat
            label="Sign out"
          />

        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data () {
    return {
      drawerRight: false
    }
  },
  methods: {
    redirect (address) {
      this.$router.push(address)
    },
  }
};
</script>

<style>
.layout {
  background-color: #90baf5;
}
.header {
  background-color: #1451a8;
}
.rotateimg1 {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
  margin-left: 36%;
}
.title {
  text-align: start;
  font-size: 40px;
  color: #ffcb66;
  font-weight: 700;
}
.shoppingCart {
  color: #ffcb66;
}
.about {
  color: #ffcb66;
  margin-left: -1%;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 20px;
}
</style>
