export default {
  isLogin: sessionStorage.getItem('SmartRobot_isLogin'),
  id: sessionStorage.getItem('SmartRobot_id'),
  nav: {
    title: '津法问案',
    crumbs: [
      {name: '津法问案', route: 'Home'}
    ]
  }
}
