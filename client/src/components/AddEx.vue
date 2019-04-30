<template>
  <div>
    <v-layout>
      <v-flex>
        <panel title="Exercise Data">
          <v-text-field label="Exercise Id" required :rules="[required]" v-model="Exercise.ExerciseId"></v-text-field>
          <v-text-field label="Exercise Type" required :rules="[required]" v-model="Exercise.ExerciseType"></v-text-field>
          <v-text-field label="Exercise Name" required :rules="[required]" v-model="Exercise.ExerciseName"></v-text-field>
          <v-text-field label="Description" required :rules="[required]" v-model="Exercise.Description"></v-text-field>
          <v-text-field label="Exercise Equipment" required :rules="[required]" v-model="Exercise.ExerciseEquipment"></v-text-field>
          <v-text-field label="Default Sets" required :rules="[required]" v-model="Exercise.DefaultSets"></v-text-field>
        </panel>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>
        <v-btn dark class="cyan" @click="create">Create Today's Workout Plan </v-btn>
      </v-flex>
      <!--<v-flex xs8>
        <panel title="Workout Plan">
          <v-text-field label="Workout Day" v-model="Exercise.ExerciseDay"></v-text-field>
          <v-text-field label="Number of Exercise" v-model="Exercise.NumberOfExercise"></v-text-field>
          <v-text-field label="Worktout Time" v-model="Exercise.ExerciseTime"></v-text-field>
      </v-flex>-->
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import ExerciseService from '@/services/ExerciseService'
export default {
  data () {
    return {
      Exercise: {
        ExerciseId: null,
        ExerciseType: null,
        ExerciseName: null,
        Description: null,
        ExerciseEquipment: null,
        DefaultSets: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.Exercise)
        .every(key => !!this.Exercise[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await ExerciseService.post(this.Exercise)
        this.$router.push({
          name: 'Exercise'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
