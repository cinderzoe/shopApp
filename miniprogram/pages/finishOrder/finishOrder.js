// pages/finishOrder/finishOrder.js
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
      orderName: "交易成功",
      orderTips: "欢迎您再次光临",
      backgroundImg: "../../images/finished.png",
      logistics: {
        currentStatus: '由【浙江杭州中转部】发往【浙江杭州滨江西兴公司】',
        statusTime: '2019-08-30 07：09：34',
        action:'gotoLogis'
      },
      proList: [
        { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "302.00", "carryFare": 10.00, "num": 3 },
        { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "200.00", "carryFare": 0, "num": 2 }
      ],
      sendMethod: '10.00',
      proNum: 2,
      totalPrime: 400.00,
      leaveWord: '麻烦尽快发货,谢谢啦',
      editBtn: null,
      moreInfo: [
        { name: '订单编码', content: '3472897428973287328732' },
        { name: '支付流水号', content: '9839384343949283' },
        { name: '下单时间', content: '2017-04-23 00:00:00' },
        { name: '支付方式', content: '微信支付' },
        { name: '付款时间', content: '2017-04-23 00:00:00' },
        { name: '发货时间', content: '2017-04-26 12:34:20' },
        { name: '成交时间', content: '2017-04-27 12:34:20' }
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
  gotoLogis:function(){
    wx.navigateTo({
      url: '../logistics/logistics',
    })
  }

})