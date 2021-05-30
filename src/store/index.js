import Vue from 'vue'
import Vuex from 'vuex'


// import example from './module-example'

Vue.use(Vuex)
import db from '../assets/db.json'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {

  const Store = new Vuex.Store({
    state: { user: {}, cart: [] },
    actions: {

      signIn ({ commit }, creds) {

        const db1 = db.customers

        for (let i = 0; i < db1.length; i++) {
          const user = db1[i]

          if (creds[0] === user.email && creds[1] === user.password) {
            console.log("User:", user)
            commit("SET_USER", user)

            return true
          }
        }
        return false
      },
    },
    getters: {
      isItemInCart: state => item => {
        for (let index = 0; index < state.cart.length; index++) {
          const element = state.cart[index]
          if (element.id === item.id) {
            return true
          } else {
            return false
          }


        }
      }
    },
    mutations: {
      SET_USER (state, user) {
        state.user = user
      },
      REMOVE_USER (state) {
        state.user = {}
      },
      UPDATE_ITEM (state, data) {
        console.log(state.cart)
        state.cart.filter(el => el.id === data[0])[0].quantity = data[1]
      },
      ADD_ITEM (state, data) {
        state.cart.push(data)
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
