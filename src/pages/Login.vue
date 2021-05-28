<template>
  <q-page class="flex flex-center background">
    <div
      class="column justify-even items-center q-gutter-y-md"
      style="text-align: center; width: 80%; margin-top: -10%"
    >
      <img
        class="rotateimg"
        src="../assets/cake.png"
        alt="cake"
        height="100px"
        width="100px"
      >
      <span
        class="q-mt-auto"
        style="font-weight: 700; color: #FFCB66; font-size: 300%"
      >
        Sunnycakes
      </span>
      <q-card
        style="width: 20%"
        class="card q-pb-lg"
      >
        <q-input
          style="width: 90%"
          outlined
          v-model="username"
          type="email"
          placeholder="Email:"
          class="q-mx-auto q-mt-lg input q-mb-lg"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input
          style="width: 90%"
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          placeholder="Password:"
          class="q-mx-auto q-mt-lg input q-mb-sm"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <span
          class="q-pb-lg q-mr-lg text"
          style="float: right"
        >
          Forgot Password?
        </span>
        <q-btn
          class="button"
          label="Logga in"
          style="width: 90%"
          size="lg"
        />
      </q-card>
      <q-card
        class="row justify-center items-center text-center card"
        style="width: 20%"
      >
        <div class="q-pa-md">
          <span
            class="q-mt-auto"
            style="font-weight: 500"
          >
            New to SunnyCakes?
          </span>
          <span class="q-mb-auto text">
            Create an account.
          </span>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      loginError: false,
      isPwd: true,
    }
  }
}
</script>

<style>
.background {
  background-image: linear-gradient(#1451a8, #90baf5);
}
.card {
  background-color: #90baf5;
}
.input {
  background-color: white;
}
.button {
  background-color: #ffcb66;
}
.rotateimg {
  -webkit-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  transform: rotate(15deg);
}
.text {
  font-weight: 700;
  color: #1451a8;
}
</style>
