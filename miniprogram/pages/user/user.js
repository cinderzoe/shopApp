Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItems:[
      {img:"../../images/order1.png",txt:"待付款",number:2,method:"notPay"},
      { img: "../../images/order2.png", txt: "待发货", number: 9, method: "notSend" },
      { img: "../../images/order3.png", txt: "已发货", number: 5, method: "alreadySend" },
      { img: "../../images/order4.png", txt: "已完成", number: 66, method: "finished" },
      { img: "../../images/order5.png", txt: "已关闭", number: 3, method: "closed" }
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
  gotoAddress:function(){
    wx.navigateTo({
      url: '../addrList/addrList',
    })
  },
  gotoOrders:function(){
    this.gotoOrder(0)
  },
  notPay:function(){
    this.gotoOrder(1)
  },
  notSend:function(){
    this.gotoOrder(2)
  },
  alreadySend:function(){
    this.gotoOrder(3)
  },
  finished:function(){
    this.gotoOrder(4)
  },
  closed:function(){
    this.gotoOrder(5)
  },
  gotoOrder:function(val){
    var index=val
    wx.navigateTo({
      url: '../totalOrder/totalOrder?orderIndex='+index,
    })
  }

})