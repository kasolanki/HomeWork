import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (ExerciseId) {
    return Api().get(`Exercise/${ExerciseId}`)
  },
  post (Exercise) {
    return Api().post('Exercise', Exercise)
  }
}
