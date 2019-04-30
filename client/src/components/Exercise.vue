<template>
  <v-layout column>
    <v-flex>
      <panel title="Exercise">
        <v-btn slot="action"
          @click="navigateTo({name: 'Exercise-Add'})"
          class="cyan accent-2" light medium absolute right middle fab>
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="Exercise in Exercise" class="Exercise" :key="Exercise.title">
          <v-layout>
            <v-flex>
              <div class="Exercise-ExerciseId">{{Exercise.ExerciseId}}</div>
              <div class="Exercise-ExerciseName">{{Exercise.ExerciseName}}</div>
              <div class="Exercise-DefaultSets">{{Exercise.DefaultSets}}</div>
            </v-flex>
          </v-layout>
          {{Exercise.ExerciseId}} -
          {{Exercise.ExerciseName}} -
          {{Exercise.DefaultSets}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// import ExerciseService from '@/services/ExerciseService'
import ExerciseService from '@/services/ExerciseService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      Exercise: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.Exercise = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>
.Exercise {
  padding: 20px;
  height: 270px;
  overflow: hidden;
}
.Exercise-ExerciseId {
  font-size: 30px;
}

.Exercise-ExerciseName {
  font-size: 27px;
}

.Exercise-DefaultSets {
  font-size: 24px;
}
</style>
