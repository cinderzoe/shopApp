//index.js
const db=wx.cloud.database();
const app = getApp()

Page({
  data: {
    headImgItem:[ //轮播图
      "../../images/Unsplash_photo.png",
      "../../images/Unsplash_photo.png",
      "../../images/Unsplash_photo.png"
    ],
    headDots:true,
    dotColor: "rgba(192,164,91,0.5)",
    dotActiveColor: "rgba(192,164,91,1)",
    listContentsPublic:[],//人气推荐列表
    listContentsHot: [],//热销榜单列表
    yunImage:[]
  },

  onLoad: function() {
    var _this=this
    wx.request({
      //项目的真正接口，通过字符串拼接方式实现
      url: 'http://www.lazyzoe.cn:3000/shopInfoGet',
      method: 'GET',
      success: function (res) {
        //参数值为res.data,直接将返回的数据传入
        console.log(res.data)
        _this.setData({
          listContentsPublic: res.data,
          listContentsHot:res.data
        })
      },
      fail: function () {
        doFail();
      },
    })
  },
  gotoProDetail: function () {
    wx.navigateTo({
      url: '../productDetail/productDetail',
    })
  },
})
