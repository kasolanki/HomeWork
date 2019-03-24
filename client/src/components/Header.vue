<template>
  <v-toolbar fixed class="teal" dark>
      <v-toolbar-title class="mr-4">
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
          FitnessTracker
        </span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="amber" flat dark
          @click="navigateTo({name: 'Exercise'})">
            Browse
          </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
       <!-- <router-link to="register"> -->

          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="amber" flat dark
          @click="navigateTo({name: 'login'})">
            Log In
          </v-btn>

          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="amber" flat dark
          @click="navigateTo({name: 'register'})">
            Sign Up
          </v-btn>

          <v-btn
          v-if="$store.state.isUserLoggedIn"
          class="amber" flat dark
          @click="logout">
            Log Out
          </v-btn>

       <!-- </router-link> -->
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      // redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}

.home:hover{
    color: brown;
}

</style>
