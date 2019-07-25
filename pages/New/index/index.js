// pages/New/index/index.js
const app = getApp()
const { $common } = app
Page({
  data: {
    list: [{
      url: '/images/clock3.png',
      title: "我的打卡日记",
      to: '/pages/clockIn/myClockInDiary/myClockInDiary'
    }],
  },
  jump(e) { // 跳转
    wx.navigateTo({ url: e.currentTarget.dataset.to })
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return $common.share()
  }
})