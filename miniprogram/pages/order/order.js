// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAddBtn: true,//显示添加地址按钮，收货人信息不显示
    buyername: '',
    buyermobile: '',
    buyeraddress: '',
    buyercity:'',
    orderProduct:'', //订单产品信息
    totalPrime:0,
    buyerhas:false,
    totalInfo: { //加上地址，留言的订单信息
      proListInfo:[],
      totalFare: 0, //支付金额
      payName: "", //收货人名字
      payMobile: "",  //收货电话号码
      payAddress: "",  //收货地址
    }, 
    mydata:null //地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var arr = JSON.parse(options.info) //获取下订单的数据
    var arr3 = JSON.parse(options.payInfo);
    console.log(arr3);
    this.setData({ orderProduct: arr3, totalPrime: arr3.totalPrime })
    console.log(this.data.orderProduct);
  },
  onShow: function () {
    var that = this;
    if (this.data.mydata !== null) {
      this.setData({
        showAddBtn: !that.data.showAddBtn,
        buyername: that.data.mydata.name,
        buyermobile: that.data.mydata.mobile,
        buyeraddress: that.data.mydata.address,
        buyercity:that.data.mydata.city,
        buyerhas:true
      })
    }
    console.log(this.data.mydata)
  },
  addAddress: function () {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  gotopay:function(){
    var that=this;
    if (!this.data.buyerhas){
      wx.showModal({
        title: '提示',
        content: '请添加收货人信息！',
        showCancel: false
      })
      return false;
    }
    this.getVal(that.data.buyername);
    this.getAllsInfo(this.getVal(that.data.orderProduct.proList), this.getVal(that.data.totalPrime), this.getVal(this.data.buyername), this.getVal(this.data.buyermobile), this.getVal(this.data.buyeraddress));
    console.log(this.data.totalInfo)
    var info=
    wx.navigateTo({
        url: '../waitingPay/waitingPay?totalInfo=' + JSON.stringify(that.data.totalInfo),
    })
  },
  getAllsInfo: function (proListInfo, totalFare, payName, payMobile, payAddress){
    this.setData({
      totalInfo: { 
        proListInfo: proListInfo,
        totalFare: totalFare,
        payName: payName, 
        payMobile: payMobile, 
        payAddress: payAddress, 
      }
    })
  },
  getVal:function(val){
    return val;
  },
  inputWord:function(e){
    var value = e.detail.value;
    var currentIndex = e.currentTarget.dataset.index
    var arr = this.data.orderProduct;
    for (var key in arr) {
      arr.proList[currentIndex].leaveWord=value;
    }
    this.setData({ orderProduct:arr})
  }
})