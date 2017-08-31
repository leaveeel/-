//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      imgUrls: [
          {
              //link: '/pages/index/index',
              url: ''
          }, {
              //link: '/pages/index/index',
              url: ''
          }
      ],
      indicatorDots: true,
      indicatorColor: "#e9e9e7" ,
      indicatorActiveColor : "#b3b3b2",
      autoplay: true,
      current: 0,
      interval: 3000,
      duration: 1000,
      circular: false,
      vertical: false,
      userInfo: {},
      listUrl: [
          {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }, {
              url: ''
          }
      ]
  },
  clipboard: function () {
      wx.setClipboardData({
          data: '复制成功',
          success: function (res) {
                wx.showToast({
                    title: '复制成功',
                    icon: 'success',
                    duration: 1000
                })
            }
      })
  },
  
})
