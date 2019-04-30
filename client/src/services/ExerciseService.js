import Api from '@/services/Api'

export default {
  index () {
    return Api().get('Exercise')
  },
  post (Exercise) {
    return Api().post('Exercise', Exercise)
  }
}
