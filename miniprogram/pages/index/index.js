//index.js
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
    listContentsPublic: [ //人气推荐列表
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" }
    ],
    listContentsHot: [ //热销榜单列表
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_2.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" },
      { "src": "../../images/Rectangle_3.png", "txt": "这是一件衣服这是一件衣服这是一件衣服", "prime": "300.00", "sales": "110" }
    ],
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  },
  gotoProDetail: function () {
    wx.navigateTo({
      url: '../productDetail/productDetail',
    })
  }
})
