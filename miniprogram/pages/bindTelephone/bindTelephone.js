// pages/bindTelephone/bindTelephone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agreeTreaty:false,
    codeValue:'获取验证码',
    mobile:null,
    code:null,
    disabledBtn:false
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
  agreeOn:function(){
    var that=this;
    this.setData({ agreeTreaty: !that.data.agreeTreaty})
  },
  sendCode:function(){
    if (this.checkMobile()){
      if (this.checkCode()){
        return false;
        console.log(this.checkCode())
      }
    }
  },
  getMobile:function(e){
    var val = e.detail.value
    this.setData({ mobile:val})
  },
  getCode:function(e){
    var val = e.detail.value
    this.setData({ mobile: val })
  },
  checked:function(){
    this.checkMobile();
  },
  checkMobile:function(){
    if (!(/^1[3|4|5|7|8|6][0-9]\d{4,8}$/.test(this.data.mobile)) || this.data.mobile.length != 11) {
      wx.showModal({   //只有确定按钮
        title: '提示',
        content: '您的电话输入有误，请重新填写！',
        showCancel: false
      })
      return false;
    } else {
      return true;
    }
  },
  checkCode:function(){
    var that=this;
    let i = 100;
    var timer = setInterval(()=>{
      if (i === 0) {
        clearInterval(timer);
        that.setData({ codeValue: '获取验证码', disabledBtn: false})
        return i;
      }
      that.setData({ codeValue: "请" + i + "秒后再试", disabledBtn:true})
      i--
      return i;
    }, 1000);
  }
})