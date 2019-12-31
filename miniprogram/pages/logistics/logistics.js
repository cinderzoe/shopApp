// pages/logistics/logistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productImg:'../../images/Rectangle_21.png',
    express:'中通快递', //快递公司
    expressId:'473874638764',//运单编号
    logistics:[
      { date: '11.15', year: '2017', status:'快件已到达 杭州市 正在准备派件'},
      { date: '11.14', year: '2017', status: '快件已到达 浙江省 正在发往杭州市中转站' },
      { date: '11.13', year: '2017', status: '快件已到达 浙江省 正在发往杭州市中转站' },
      { date: '11.12', year: '2017', status: '快件已到达 浙江省 正在发往杭州市中转站' },
      { date: '11.11', year: '2017', status: '快件已到达 浙江省 正在发往杭州市中转站' }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
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

  }
})