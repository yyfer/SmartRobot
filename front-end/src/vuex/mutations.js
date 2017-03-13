/**
 * Created by yufan on 2017/3/9.
 */
export default {
  login (state, id) {
    state.isLogin = true
    state.id = id
  },
  logout (state) {
    state.isLogin = false
    state.id = ''
  }
}
