Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:'../../images/Rectangle_22.png',
    head_swiper:[
      "../../images/Rectangle_22.png",
      "../../images/Rectangle_22.png",
      "../../images/Rectangle_22.png"
    ],
    swiperDot:true,
    dotColor:"rgba(192,164,91,0.5)",
    dotActiveColor:"rgba(192,164,91,1)",
    proConents:'这是一件衣服这是一件衣服这是一件衣服这是一件衣服这是一件衣服这是一件衣服',
    ewm:'../../images/Group_2.png',
    currentPrime:300.00,
    oldPrime:400.00,
    addressFrom:"上海",
    proFare:10,
    saleNum:110,
    contentSrc:[
      "../../images/content.png",
      "../../images/Rectangle_22.png",
      "../../images/content.png",
      "../../images/Rectangle_23.png",
      "../../images/content.png",
      "../../images/Rectangle_23.png",
      "../../images/content.png"
    ],
    ewmImg:'../../images/Bitmap.png',
    show:false,
    intoView:null,
    totalNum:126,
    showPopSrc:"../../images/Rectangle_21.png",
    sortSelect:[
      { attr: ["黑色", "白色", "黑色60寸"]},
      { attr: ["S", "M", "L", "XL", "XXL"]}
    ],
    currentNum:1,//当前商品数量
    currentAttr:'',//当前商品属性
    showJoin:false,
    changeNum:null,
    joinOrBuy: null,//判断显示加入购物车还是立即购买
    lastProInfo: {//最新获取到的产品选项信息
      attr: null,
      txt:'',
      img:'',
      unitprice:0,
      totalPrime: 0,
      num:1,
      carryFares:0
    },
    animation_box: false,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(){
    
  },
  onShow:function(){
    var arr = this.data.sortSelect;
    for (var key in arr) {
      var arr2 = arr[key].attr;
      var arrBtn = []; //空数组，个数对应attr
      for (var key2 in arr2) {
        arrBtn.push(false);
        arr[key].btn = arrBtn;
      }
    }
  },
  onHide:function(){
    this.closeAnimate();
  },
  gotoIndex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  gotoShopCar: function () {
    wx.switchTab({
      url: '../shopCar/shopCar',
    })
  },
  showPop:function(){
    var that=this;
    this.setData({ show:!that.data.show})
  },
  closePop: function () {
    var that = this;
    this.setData({ show: !that.data.show })
  },
  cutNum:function(){
    var num = this.data.currentNum;
    if(num>1){
      num--;
    }
    this.setData({ currentNum:num})
  },
  addNum:function(){
    var num = this.data.currentNum;
    num++;
    this.setData({ currentNum: num });

  },
  numChange:function(e){
    var num = e.detail.value;
    this.setData({ changeNum:num});
  },
  checkNum:function(){
    var num = this.data.changeNum;
    if (num <= 0) {
      this.setData({ currentNum: 1 })
      wx.showModal({
        title: '提示',
        content: '购买数量不能为0！',
        showCancel: false
      })
      return;
    }
    else {
      this.setData({ currentNum: num})
    }

  },
  joinShopCar:function(){
    this.setData({joinOrBuy: true});
    this.setAnimate();
  },
  orderNow:function(){
    this.setData({ joinOrBuy: false});
    this.setAnimate();
  },
  closeJoinPop:function(){
    this.closeAnimate();
  },
  selectList:function(e){
    var isSelect = e.target.dataset.id;
    var isValue=e.target.dataset.value;
    var arr = this.data.sortSelect;
    var arr3 = [];
    for(var key in arr){
      var arr2 = arr[key].attr;
      for (var key2 in arr2){
        if (isSelect == key) {
          arr[isSelect].btn[key2] = false;
          if (isValue==key2){
            arr[isSelect].btn[isValue] = true;
            console.log(e.target.dataset.txt);
          }
        }
        if (arr[key].btn[key2]==true){
          arr3.push(arr[key].attr[key2]) //把选中的属性放进数组
        }
      }
    }
    this.setData({ sortSelect: arr, currentAttr:arr3});
    this.setProInfo(this.setProAttr(), this.setProNum(), this.setUnitPrice(), this.setTotalPrime(), this.setTxt(), this.setImg(), this.setCarryfare());
  },
  joinCarBtn:function(){
    var that=this;
    if (this.data.currentAttr.length !== this.data.sortSelect.length){
      wx.showModal({
        title: '提示',
        content: '未选择商品属性',
        showCancel: false
      })
      return;
    }
    wx.showToast({
      icon: 'success',
      title: '加入购物车成功',
      duration: 2000
    })
    setTimeout(
      function () { 
        that.setData({ showJoin: false });
        that.closeAnimate();
        },2000);
    this.setProInfo(this.setProAttr(), this.setProNum(),this.setUnitPrice(),this.setTotalPrime(),this.setTxt(),this.setImg(),this.setCarryfare());
  },
  setProInfo: function (attr, num, unitPrice,totalPrime,txt,img,carryFare){
    this.setData({
      lastProInfo:{
        attr:attr,
        num:num,
        unitPrice: unitPrice,
        totalPrime:totalPrime,
        txt:txt,
        img:img,
        carryFare: carryFare
      }
    })
  },
  setProAttr:function(){
    var attr = this.data.currentAttr;
    return attr;
  },
  setProNum:function(){
    var num =this.data.currentNum;
    return num;
  },
  setUnitPrice: function () {
    var val = this.data.currentPrime;
    return val.toFixed(2);
  },
  setTotalPrime:function(){
    var currentPrime = this.data.currentPrime;
    var totalPrime = currentPrime * this.data.currentNum;
    return totalPrime.toFixed(2);
  },
  setTxt:function(){
    var val = this.data.proConents;
    return val;
  },
  setImg:function(){
    var val=this.data.imgSrc;
    return val;
  },
  setCarryfare: function () {
    var val = this.data.proFare;
    return val;
  },
  payNow:function(){
    if (this.data.currentAttr.length !== this.data.sortSelect.length) {
      wx.showModal({
        title: '提示',
        content: '未选择商品属性',
        showCancel: false
      })
      return;
    }
    this.setProInfo(this.setProAttr(), this.setProNum(), this.setUnitPrice(), this.setTotalPrime(), this.setTxt(), this.setImg(), this.setCarryfare());
    var orders = { 'proList': [], 'totalPrime': [] };
    var info = this.data.lastProInfo;
    orders.proList.push(info)
    orders.totalPrime.push(this.data.lastProInfo.totalPrime)
    var payInfo = JSON.stringify(orders);
    console.log(payInfo);
    wx.navigateTo({
      url: '../order/order?payInfo='+payInfo,
    })
  },
  setAnimate:function(){
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'ease'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(500).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      animation_box: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  closeAnimate:function(){
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    that.animation = animation
    animation.translateY(500).step()
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        animation_box: false
      })
    }, 200)
  }
})