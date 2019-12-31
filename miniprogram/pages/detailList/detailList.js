
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listContents: [
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
  onLoad: function (options) {

  },
  gotoProDetail: function () {
    wx.navigateTo({
      url: '../productDetail/productDetail',
    })
  }
})