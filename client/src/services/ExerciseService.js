import Api from '@/services/Api'

export default {
  index () {
    return Api().get('Exercise')
  },
  show (ExerciseId) {
    return Api().get(`Exercise/${ExerciseId}`)
  },
  post (Exercise) {
    return Api().post('Exercise', Exercise)
  }
}
