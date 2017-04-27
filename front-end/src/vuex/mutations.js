/**
 * Created by yufan on 2017/3/9.
 */
let getNav = function (routeName) {
  let crumbs = [{name: '津法问案', route: {name: 'Home'}}]
  let result = {title: '', crumbs: []}
  switch (routeName) {
    case 'Home':
      result.title = '津法问案'
      result.crumbs = Array.prototype.concat.apply(crumbs)
      break
    case 'Upload':
      result.title = '扫描问案'
      result.crumbs = crumbs.concat({name: '扫描问案'})
      break
    case 'Consult':
      result.title = '语音问案'
      result.crumbs = crumbs.concat({name: '语音问案'})
      break
    case 'Report1':
      result.title = '问案报告'
      result.crumbs = crumbs.concat([{name: '扫描问案', route: {name: 'Upload'}}, {name: '问案报告'}])
      break
    case 'Report2':
      result.title = '问案报告'
      result.crumbs = crumbs.concat([{name: '扫描问案', route: {name: 'Upload'}}, {name: '问案报告'}])
      break
    case 'MyCase':
      result.title = '我的案件'
      result.crumbs = crumbs.concat({name: '我的案件'})
      break
    case 'MyCaseDetail':
      result.title = '案件详情'
      result.crumbs = crumbs.concat([{name: '我的案件', route: 'MyCase'}, {name: '案件详情'}])
      break
  }
  return result
}

export default {
  login (state, id) {
    state.isLogin = true
    state.id = id
    sessionStorage.setItem('SmartRobot_isLogin', true)
    sessionStorage.setItem('SmartRobot_id', id)
  },
  logout (state) {
    state.isLogin = false
    state.id = ''
    sessionStorage.setItem('SmartRobot_isLogin', false)
    sessionStorage.setItem('SmartRobot_id', '')
  },
  nav (state, routeName) {
    state.nav.title = getNav(routeName).title
    state.nav.crumbs = getNav(routeName).crumbs
  }
}
