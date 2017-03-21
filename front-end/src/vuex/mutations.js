/**
 * Created by yufan on 2017/3/9.
 */
let getNav = function (routeName) {
  let crumbs = [{name: '津法问案', route: 'Home'}]
  let result = {title: '', crumbs: []}
  switch (routeName) {
    case 'Home':
      result.title = '津法问案'
      result.crumbs = Array.prototype.concat.apply(crumbs)
      break
    case 'Upload':
      result.title = '扫描问案'
      result.crumbs = crumbs.concat({name: '扫描问案', route: 'Upload'})
      break
    case 'Consult':
      result.title = '语音问案'
      result.crumbs = crumbs.concat({name: '语音问案', route: 'Consult'})
      break
    case 'Report1':
      result.title = '问案报告'
      result.crumbs = crumbs.concat([{name: '扫描问啊', route: 'Upload'}, {name: '问案报告', route: 'Report1'}])
      break
    case 'Report2':
      result.title = '问案报告'
      result.crumbs = crumbs.concat([{name: '扫描问啊', route: 'Upload'}, {name: '问案报告', route: 'Report2'}])
      break
    case 'MyCase':
      result.title = '我的案件'
      result.crumbs = crumbs.concat({name: '我的案件', route: 'MyCase'})
      break
    case 'MyCaseDetail':
      result.title = '案件详情'
      result.crumbs = crumbs.concat([{name: '我的案件', route: 'MyCase'}, {name: '案件详情', route: 'MyCaseDetail'}])
      break
  }
  return result
}

export default {
  login (state, id) {
    state.isLogin = true
    state.id = id
  },
  logout (state) {
    state.isLogin = false
    state.id = ''
  },
  nav (state, routeName) {
    state.nav.title = getNav(routeName).title
    state.nav.crumbs = getNav(routeName).crumbs
  }
}
