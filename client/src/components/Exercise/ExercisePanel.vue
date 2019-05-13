<template>
  <panel title="Exercise">
    <v-btn
      slot="action"
      :to="{
        name: 'Exercise-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div
      v-for="Exercise in Exercise"
      class="Exercise"
      :key="Exercise.id">

      <v-layout>
        <v-flex xs6>
          <div class="Exercise-id">
            {{Exercise.ExerciseId}}
          </div>
          <div class="Exercise-Name">
            {{Exercise.ExerciseName}}
          </div>
          <div class="Exercise-Sets">
            {{Exercise.DefaultSets}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'Exercise',
              params: {
                ExerciseId: Exercise.id
              }
            }">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      Exercise: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.Exercise = (await ExerciseService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
</style>
