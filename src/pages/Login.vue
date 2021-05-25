<template>
  <q-page class="flex flex-center background">
    <div
      class="column justify-center items-center q-gutter-y-md"
      style="text-align: center; width: 80%"
    >
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
          class="q-mx-auto q-pt-lg"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <span
          class="q-pb-lg"
          style="font-weight: 400"
        >
          Forgot Password?
        </span>
        <q-input
          style="width: 90%"
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          placeholder="Lösenord:"
          class="q-mx-auto q-py-lg"
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
        <q-btn
          class="button"
          label="Logga in"
          style="width: 90%"
          size="lg"
        />
      </q-card>
      <q-card
        class="row justify-center items-center text-center"
        style="width: 20%"
      >
        <div>
          <span
            class="q-mt-auto"
            style="font-weight: 400"
          >
            New to SunnyCakes?
          </span>
          <span
            class="q-mb-auto"
            style="font-weight: 400"
          >
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
      isPwd: true
    }
  }

}
</script>

<style>
.background {
  background-image: linear-gradient(#01438a 1%, #ffbe4f);
}
.card {
  background-color: white;
}
.input {
  background-color: white;
}
.button {
  background-color: #01438a;
}
</style>
