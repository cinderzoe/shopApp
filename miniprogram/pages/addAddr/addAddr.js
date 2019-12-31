// pages/addAddr/addAddr.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     showAddBtn:true,//显示添加地址按钮，收货人信息不显示
//     buyername:'',
//     buyermobile:'',
//     buyeraddress:''
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },
//   onShow:function(){
//     console.log(this.data.mydata);
//     var that=this;
//     if (this.data.mydata!==undefined){
//       this.setData({ 
//         showAddBtn: !that.data.showAddBtn,
//         buyername: that.data.mydata.name,
//         buyermobile: that.data.mydata.mobile,
//         buyeraddress: that.data.mydata.addr,
//         })
//     }
//     console.log(this.data.showAddBtn);
//     console.log(this.data.buyername);
//     console.log(this.data.buyermobile);
//     console.log(this.data.buyeraddress);
//   },
//   addAddress:function(){
//     wx.navigateTo({
//       url: '../address/address',
//     })
//   }
// })