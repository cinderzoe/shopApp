// pages/totalOrder/totalOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNav:[
      { name: '全部', action:'allOrder'},
      { name: '待付款', action: 'notPay' },
      { name: '待发货', action: 'notSend' },
      { name: '已发货', action: 'alreadySend' },
      { name: '已完成', action: 'finished' },
      { name: '已关闭', action: 'closed' }
    ],
    orderInfo: [
      {
        attr: '待付款',
        payTime: '2017-04-23 00:00:00',
        proList: [
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "302.00", "carryFare": 10.00, "num": 1 },
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "200.00", "carryFare": 0, "num": 2 }
        ],
        proNum: 2,
        totalPrime: 400.00,
        editBtn:[
          { name: '取消订单', action: 'cancelOrder', className:'cancel-btn'},
          { name: '立即付款', action: 'payNow', className: 'pay-btn'}
        ]
      },
      {
        attr: '待发货',
        payTime: '2017-04-23 00:00:00',
        proList: [
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "150.00", "carryFare": 10.00, "num": 3 },
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 1 },
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 2 }
        ],
        proNum: 3,
        totalPrime: 550.00,
        editBtn: null
      },
      {
        attr: '已发货',
        payTime: '2017-04-23 00:00:00',
        proList: [
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "150.00", "carryFare": 10.00, "num": 3 },
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 1 },
         
        ],
        proNum: 2,
        totalPrime: 640.00,
        editBtn: [
          { name: '查看物流', action: 'checkLogistics', className: 'cancel-btn' },
          { name: '确认收货', action: 'confirmReceipt', className: 'pay-btn' }
        ]
      }, 
      {
        attr: '已完成',
        payTime: '2017-04-23 00:00:00',
        proList: [
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "150.00", "carryFare": 10.00, "num": 3 },
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 1 },
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 2 }
        ],
        proNum: 3,
        totalPrime: 700.00,
        editBtn: null
      },
      {
        attr: '已关闭',
        payTime: '2017-04-23 00:00:00',
        proList: [
          { "img": "../../images/Rectangle_23.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "150.00", "carryFare": 10.00, "num": 3 },
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 1 },
          { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["白色", "s码"], "unitPrice": "400.00", "carryFare": 0, "num": 2 }
        ],
        proNum: 3,
        totalPrime: 700.00,
        editBtn: null
      }
    ],
    selectOrderInfo:[] //展现的订单数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.changeNav(options.orderIndex);
    this.chooseOrder(options.orderIndex - 1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  changeNav:function(index){
    var arr=this.data.orderNav;
    for(var key in arr){
      if(key==index){
        arr[key].hasActive=true
      }
      else { arr[key].hasActive = false;}
    }
    this.setData({orderNav:arr})
  },
  allOrder:function(e){
    var that=this;
    this.changeNav(e.currentTarget.dataset.index);
    this.setData({ selectOrderInfo: that.data.orderInfo }) //显示全部
  },
  notPay:function(e){
    var index = e.currentTarget.dataset.index;
    this.changeNav(index);
    this.chooseOrder(index-1)
  },
  notSend:function(e){
    var index = e.currentTarget.dataset.index;
    this.changeNav(index);
    this.chooseOrder(index-1)
  },
  alreadySend: function (e) {
    var index = e.currentTarget.dataset.index;
    this.changeNav(index);
    this.chooseOrder(index-1)
  },
  finished: function (e) {
    var index = e.currentTarget.dataset.index;
    this.changeNav(index);
    this.chooseOrder(index-1)
  },
  closed:function(e){
    var index = e.currentTarget.dataset.index;
    this.changeNav(index);
    this.chooseOrder(index - 1)
  },
  chooseOrder:function(index){ //显示对应订单信息
    var arr=[];
    arr.push(this.data.orderInfo[index])
    this.setData({ selectOrderInfo:arr});
  }
})