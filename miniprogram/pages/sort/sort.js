Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortCoents:[
      { "src":"../../images/fuwuqi.png","txt":"独家甄选独家"},
      { "src": "../../images/fuwuqi.png", "txt": "甄选独家" },
      { "src": "../../images/fuwuqi.png", "txt": "独家数码电子" },
      { "src": "../../images/fuwuqi.png", "txt": "护理" },
      { "src": "../../images/fuwuqi.png", "txt": "独家甄选独家" },
      { "src": "../../images/fuwuqi.png", "txt": "甄选独家" },
      { "src": "../../images/fuwuqi.png", "txt": "独家数码电子" },
      { "src": "../../images/fuwuqi.png", "txt": "护理" },
      { "src": "../../images/fuwuqi.png", "txt": "独家甄选独家" },
      { "src": "../../images/fuwuqi.png", "txt": "甄选独家" },
      { "src": "../../images/fuwuqi.png", "txt": "独家数码电子" },
      { "src": "../../images/fuwuqi.png", "txt": "护理" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  gotolist:function(){
    wx.navigateTo({
      url: '../sortList/sortList',
    })
  }
})