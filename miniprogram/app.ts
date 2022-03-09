import { getToken } from "./utils/auth";

App({
  globalData: {},
  onLaunch() {
    if (!getToken()) {
      wx.navigateTo({
        url: 'pages/login/index'
      })
    }
  },
  
})