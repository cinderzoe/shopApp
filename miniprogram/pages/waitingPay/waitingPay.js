// pages/waitingPay/waitingPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentBtn:false, //支付方式按钮
    orderInfo:[], //订单信息
    orderPrime:0, //订单总价
    orderId:"343434224132323455",
    payMethod:"微信支付"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = JSON.parse(options.totalInfo)
    console.log(arr)
    this.setData({orderPrime:arr.totalFare,orderInfo:arr})
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
  payMethod:function(){
    this.setData({ currentBtn: !this.data.currentBtn})
  },
  payment:function(){
    var arr = this.data.orderInfo;
    arr.orderId = this.data.orderId;
    arr.payMethod = this.data.payMethod;
    wx.navigateTo({
      url: '../successPay/successPay?orderInfo=' + JSON.stringify(arr),
    })
    console.log(arr)
  }
})