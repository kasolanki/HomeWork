<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Exercise-search-panel />
      <Exercise-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import ExercisePanel from './ExercisePanel'
import ExerciseSearchPanel from './ExerciseSearchPanel'
import ExerciseService from '@/services/ExerciseService'
export default {
  components: {
    ExercisePanel,
    ExerciseSearchPanel
  },
  data () {
    return {
      Exercise: null
    }
  },
  async mounted () {
    this.Exercise = (await ExerciseService.index()).data
  }
}
</script>

<style scoped>

</style>
