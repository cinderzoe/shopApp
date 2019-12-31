// pages/shopCar/shopCar.js
var listData=require('../list/list.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopCarList: [
      { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": ["黑色", "白色"], "unitPrice": "302.00", "carryFare": 10.00,"num":1},
      { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": "黑色", "unitPrice": "160.00", "carryFare": 0.00, "num": 1},
      { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": "黑色", "unitPrice": "200.00", "carryFare": 12.00, "num": 1},
      { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": "黑色", "unitPrice": "436.60", "carryFare": 0.00, "num": 1},
      { "img": "../../images/Rectangle_21.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "attr": "黑色", "unitPrice": "333.09", "carryFare": 8.00, "num": 1}
    ],
    currentNum: 1,
    selectBtn: true,//单个商品是否选中
    selectAll: true,//全选按钮
    selectYes:true,
    selectNo:false,
    select_self: true,//自己是否选中
    shopCarLists:null,//列表所有数据
    totalPrime:0,//总价
    listContents: [//list的产品列表数据(购物车没有产品信息时出现的列表))
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    this.numChange(this.data.currentNum,null);
    this.selectChange(this.data.selectAll,null);
    this.totalPrimeCompute();
  },
  cutNum: function (e) {
    var targetIndex = e.target.dataset.index;
    var num = this.data.shopCarList[targetIndex].num;
    if (num > 1) {
      num--;
    }
    this.numChange(num, targetIndex);
    this.totalPrimeCompute();
  },
  addNum: function (e) {
    var targetIndex = e.target.dataset.index;
    var num = this.data.shopCarList[targetIndex].num;
    num++;
    this.numChange(num, targetIndex);
    this.totalPrimeCompute();
  },
  numChange: function (e) {
    var num = e.detail.value;
    this.setData({ changeNum: num });
  },
  checkNum: function () {
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
      this.setData({ currentNum: num })
    }
  },
  changeAll: function () {
    var that = this;
    this.setData({selectAll: !that.data.selectAll});
    this.selectChange(that.data.selectAll,null);
    this.totalPrimeCompute();
  },
  selectList: function (e) {
    var that=this;
    var targetIndex = e.currentTarget.dataset.id;
    this.selectChange(null,targetIndex);
    var arr = this.data.shopCarList;
    var attr=true;
    for(var key in arr){
      if (arr[key].selectSelf==false){
        attr=false;
        this.setData({ selectAll: that.data.selectNo });
      }
    }
    if (attr==true){
      this.setData({ selectAll: that.data.selectYes });

    }
    this.totalPrimeCompute();
  },
  numChange: function (num, targetIndex){//按钮点击数量变化
    var arr = this.data.shopCarList;
    if (targetIndex != null) {
      for (var key in arr) {
        this.data.shopCarList[targetIndex].num = num;
      }
    }else{
      for (var key in arr) {
        this.data.shopCarList[key].num = num;
      }
    }
    this.setData({ shopCarLists: this.data.shopCarList });
    this.primeChange();
  },
  primeChange:function(){//产品价格变动
    var arr = this.data.shopCarList;
    for(var key in arr){
      var num = this.data.shopCarList[key].num;
      var prime = this.data.shopCarList[key].unitPrice;
      var selfTotalPrime = num * prime;
      this.data.shopCarList[key].selfTotalPrime = selfTotalPrime;
    }
    this.setData({ shopCarLists: this.data.shopCarList });
  },
  selectChange: function (selectAll,targetIndex){
    var arr = this.data.shopCarList;
    if (targetIndex != null) {
      for (var key in arr) {
        this.data.shopCarList[targetIndex].selectSelf = !this.data.shopCarList[targetIndex].selectSelf;
      }
    } else {
      for (var key in arr) {
        this.data.shopCarList[key].selectSelf = selectAll;
      }
    }
    this.setData({ shopCarLists: this.data.shopCarList });
  },
  totalPrimeCompute:function(){  //计算总价方法，应用到加减数量按钮，选中按钮
    var that=this;
    var arr = this.data.shopCarList;
    var selfTotalPrime = 0;
    for(var key in arr){
      if (arr[key].selectSelf==true){
        var selfPrime = arr[key].unitPrice;
        var selfquantiy = arr[key].num;
        var carryFare = arr[key].carryFare;
        selfTotalPrime = (selfPrime * selfquantiy + carryFare) + selfTotalPrime;
      }
    }
    this.setData({ totalPrime: selfTotalPrime.toFixed(2)})
  },
  gotoList:function(){
    wx.redirectTo({
      url: '../detailList/detailList',
    })
  },
  gotoProDetail: function () {//点击进入列表页，list的方法
    wx.navigateTo({
      url: '../productDetail/productDetail',
    })
  },
  gotoOrder: function () {  //结算
    var info = this.data.shopCarLists;
    var orders={'proList':[],'totalPrime':[]};
    for(var key in info){
      if(info[key].selectSelf==true){
        orders.proList.push(info[key])
      }
    }
    if (orders.proList.length==0){
      wx.showModal({   //只有确定按钮
        title: '提示',
        content: '购买数量不能为0！',
        showCancel: false
      })
      return false;
    }
    orders.totalPrime.push(this.data.totalPrime)
    var that=this;
    var payInfo = JSON.stringify(orders);
    console.log(orders);
    wx.navigateTo({
      url: '../order/order?payInfo=' + payInfo,
    })
  },
  deletePro:function(e){
    //this.data.shopCarLists.
    var index = e.currentTarget.dataset.index;
    var arr = this.data.shopCarLists;
    var that=this;
    wx.showModal({
      title: '提示',
      content: '确定要从购物车移除该物品',
      success(res) {
        if (res.confirm) {
          arr.splice(index, 1);
          that.setData({ shopCarLists: arr});
        } else if (res.cancel) {
          return false;
        }
      }
    })
    console.log(this.data.shopCarLists)
  }
})