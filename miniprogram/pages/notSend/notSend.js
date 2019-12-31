// pages/notSend/notSend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAddBtn: null,
    buyername: "张小明",
    buyermobile: "18647380998",
    buyeraddress: "浙江省杭州市滨江区长河街道749号东",
    orderInfo: {
      orderName: "待发货",
      orderTips: "请您耐心等待…",
      backgroundImg: "../../images/notsend.png",
      proList: [
        { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "302.00", "carryFare": 10.00, "num": 3 },
        { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "200.00", "carryFare": 0, "num": 2 }
      ],
      sendMethod: '10.00',
      proNum: 2,
      totalPrime: 400.00,
      leaveWord: '麻烦尽快发货,谢谢啦',
      editBtn: null,
      moreInfo:[
        { name: '订单编码', content:'3472897428973287328732'},
        { name: '支付流水号', content: '9839384343949283' },
        { name: '下单时间', content: '2017-04-23 00:00:00' },
        { name: '支付方式', content: '微信支付' },
        { name: '付款时间', content: '2017-04-23 00:00:00' }
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
    console.log(this.data.orderInfo)
  },

})