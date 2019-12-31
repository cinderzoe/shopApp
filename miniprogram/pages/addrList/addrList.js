// pages/addrList/addrList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrListInfo:[
      { "name": "张元元", "mobile": "13854770976", "city": ['浙江省', '杭州市','滨江区'], "address": "浙江省杭州市滨江区长河街道电商产业园","defaultBtn":true},
      { "name": "黄紫茵", "mobile": "15011722315", "city": ['广东省', '深圳市', '南山区'],"address": "广东省深圳市南山区乌石头路自来水居瑞兹青年公寓", "defaultBtn": false},
      { "name": "陈青梅", "mobile": "13537591308", "city": ['广东省', '云浮市', '罗定市'],"address": "广东省云浮市罗定市龙湾镇扶合田寮4号", "defaultBtn": false}
    ],
    noDefault:"设为默认",
    hasDefault:"默认地址"
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
    if (this.data.mydata!==undefined){ //判断是否有地址信息返回
      console.log(this.data.mydata);
      var arr = this.data.addrListInfo;
      var emptyArr = [];
      if(arr.length===0){
        arr = this.data.mydata;
        emptyArr.push(arr)
        this.setData({ addrListInfo: emptyArr});
      }
      else{
        if (this.data.editIndex==null){
          if (this.data.mydata.defaultBtn){
            for(var key in arr){
              arr[key].defaultBtn = false;
            }
          }
          arr.push(this.data.mydata);
          this.setData({addrListInfo: arr});
        }
        else{
          for (var key in arr) { //当有地址信息时执行
            arr[key].defaultBtn = false; //所有变为不默认地址
            if (key == this.data.editIndex) {
              arr[key].name = this.data.mydata.name;
              arr[key].mobile = this.data.mydata.mobile;
              arr[key].city = this.data.mydata.city;
              arr[key].address = this.data.mydata.address;
              if (this.data.mydata.defaultBtn == true) { //当检测到有设置默认地址的，则单独设置
                arr[key].defaultBtn = true;
              }
            }
          }
          this.setData({ addrListInfo: arr });
        }
      }
    }
  },
  onHide:function(){
    this.setData({ mydata:undefined})
  },
  setDefault:function(e){
    var index=e.currentTarget.dataset.index;
    var arr = this.data.addrListInfo;
    for(var key in arr){
      if(key==index){
        arr[key].defaultBtn=true;
      }
      else{
        arr[key].defaultBtn = false;
      }
    }
    this.setData({ addrListInfo:arr});
  },
  editAddress:function(e){ //编辑按钮
    var index=e.currentTarget.dataset.index;
    var arr=this.data.addrListInfo;
    var info = JSON.stringify(arr[index])
    wx.navigateTo({
      url: '../address/address?info=' + info + '&index=' + index,
    })
  },
  deleteAddress:function(e){ //删除按钮
    var index = e.currentTarget.dataset.index;
    var arr = this.data.addrListInfo;
    var that=this;
    wx.showModal({
      title: '提示',
      content: '确定要删除该地址信息',
      success(res) {
        if (res.confirm) {
          arr.splice(index, 1);
          that.setData({ addrListInfo: arr });
        } else if (res.cancel) {
          return false;
        }
      }
    })
  },
  gotoAddr:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  addAddr:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  }
})