<template>
  <q-page class="column justify-evenly">
    <div
      class="col-auto row justify-center"
      style="text-align: center;"
    >
      <q-card style="width: 30%">
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
          color="blue"
          label="Logga in"
          style="width: 90%"
          size="lg"
        />
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
