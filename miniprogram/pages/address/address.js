// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['', '', ''],//省市区
    choiceBtn: false,//默认地址按钮
    tips: false,
    addressInfo:{
      'name':'',
      'mobile':'',
      'city':'',
      'address':'',
      'defaultBtn':false
    },
    currentIndex:null //当前修改信息的序列号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (JSON.stringify(options) !== '{}'){ //当有数据传过来的时候执行此操作,判断options对象是否为空
      var arr = JSON.parse(options.info) //编辑地址的信息
      this.setAddrInfo(arr.name, arr.mobile, arr.city, arr.address, arr.defaultBtn);
      this.setData({ choiceBtn: arr.defaultBtn, region: arr.city, currentIndex: options.index });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.addressInfo)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onHide:function(){ //切换到后端之后，数据要清掉，不然会影响到后退功能
    this.setData({
      addressInfo: {
        'name': '',
        'mobile': '',
        'city': '',
        'address': '',
        'defaultBtn': false
      }
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  choiceDefault:function(){
    var that=this;
    this.setData({
      choiceBtn: !that.data.choiceBtn
    })
    if (this.data.choiceBtn==true){
      this.setData({
        tips: true
      })
    }
  },
  check:function(){
    this.setAddrInfo(this.setName(), this.setMobile(), this.setCity(), this.setAddr(), this.setDeFault());
    if (this.data.addressInfo.name.length < 2) {
      wx.showModal({
        content: '请输入姓名',
        showCancel: false
      })
      return false;
    }
    var reg1 = /^[\u4e00-\u9fa5]{2,4}$/;
    if (!reg1.test(this.data.addressInfo.name)) {
      wx.showModal({
        content: '姓名格式不正确，请填写真实姓名',
        showCancel: false
      })
      return false;
    }
    if (!(/^1[3|4|5|7|8|6][0-9]\d{4,8}$/.test(this.data.addressInfo.mobile)) || this.data.addressInfo.mobile.length != 11) {
      wx.showModal({
        content: '请输入你的手机号码',
        showCancel: false
      })
      return false;
    }
    if (this.data.addressInfo.city.length == 0) {
      wx.showModal({
        content: '请选择地区',
        showCancel: false
      })
      return false;
    }
    if (this.data.addressInfo.address.length ==0) {
      wx.showModal({
        content: '请输入你的详细地址',
        showCancel: false
      })
      return false;
    }
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    wx.navigateBack({//返回
      delta: 1
    })
    var that=this;
    var pages = getCurrentPages();//获取当前页面js里面的pages里的所有信息。
    var prevPage = pages[pages.length - 2]; //上一个页面
    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
    prevPage.setData({
      mydata: that.data.addressInfo,
      editIndex:that.data.currentIndex
    })
    console.log(this.data.addressInfo);
    console.log(this.data.currentIndex)
  },
  setAddrInfo: function (name, mobile, city, address, defaultBtn){
    this.setData({
      addressInfo:{
        name: name,
        mobile: mobile,
        city: city,
        address: address,
        defaultBtn: defaultBtn
      }  
    })
  },
  inputName:function(e){
    var val=e.detail.value;
    this.data.addressInfo.name=val;
  },
  inputMobile:function(e){
    var val = e.detail.value;
    this.data.addressInfo.mobile = val;
  },
  inputAddr: function (e) {
    var val = e.detail.value;
    this.data.addressInfo.address = val;
  },
  setName:function(){
    var val = this.data.addressInfo.name;
    return val;
  },
  setMobile: function () {
    var val = this.data.addressInfo.mobile;
    return val;
  },
  setCity: function () {
    var val = this.data.region;
    return val;
  },
  setAddr:function(){
    var val = this.data.addressInfo.address;
    return val;
  },
  setDeFault:function(){
    var val = this.data.choiceBtn;
    return val;
  }
})