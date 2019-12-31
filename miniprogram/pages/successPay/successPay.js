// pages/successPay/successPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalInfo:null,
    paymentId:"8374387439489324873847338",//支付流水号
    payTime:'',//下单时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr=JSON.parse(options.orderInfo);
    this.setData({ totalInfo:arr})
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
    this.getCurrentTime();
  },
  goBack:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  gotoOrder:function(){

  },
  getCurrentTime:function(){
    var date = new Date();
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    var time=Y + M + D + " " + h + m + s;
    this.setData({ payTime:time})

  }

})