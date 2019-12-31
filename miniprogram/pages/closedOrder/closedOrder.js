// pages/closedOrder/closedOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAddBtn: null,
    buyername: "张小明",
    buyermobile: "18647380998",
    buyeraddress: "浙江省杭州市滨江区长河街道749号东浙江省杭州",
    orderInfo: {
      orderName: "交易关闭",
      orderTips: "欢迎您再次光临…",
      backgroundImg: "../../images/closeOrder.png",
      proList: [
        { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "674.00", "carryFare": 10.00, "num": 3 }
      ],
      sendMethod: '10.00',
      proNum: 2,
      totalPrime: 674.00,
      leaveWord: '麻烦尽快发货,谢谢啦',
      editBtn: null,
      moreInfo: [
        { name: '订单编码', content: '3472897428973287328732' },
        { name: '支付流水号', content: '9839384343949283' },
        { name: '下单时间', content: '2017-04-23 00:00:00' },
        { name: '付款时间', content: '2017-04-23 00:00:00' },
      ]
    }
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
  confirmReceipt: function () {
    wx.showModal({  //有取消和确定按钮
      content: '确定要确认收货吗',
      confirmColor: '#FF6248',
      success(res) {
        if (res.confirm) {

        } else if (res.cancel) {
          return false;
        }
      }
    })
  },
  gotoLogis: function () {
    wx.navigateTo({
      url: '../logistics/logistics',
    })
  }

})