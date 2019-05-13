<template>
<v-btn></v-btn>
</template>

<script>
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      Exercise: null
    }
  },
  async mounted () {
    const ExerciseId = this.$store.state.route.params.id
    const Exercise = await ExerciseService.show(ExerciseId)
    console.log(Exercise)
  }
}
</script>

<style scoped>

</style>
