// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      Question:" 我为什么实习？",
      answerPreview_1:"有不少同学在实习的时候产生过如此疑问：",
      answerPreview_2:"除了应对学校要求，我们为什么要实习呀？从实习的过程中，我们要学会些什么呀？",
      answerPreview_3:"\n\n大学生的实习，除了处于正式工作的预备役，无论未来是走深造的道路还是步入职场，都意义非凡。",
      thumb_number:"20",
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toaichat(){
    wx.navigateTo({
      url: './aichat/aichat',
    })
  },
  toask(){
    wx.navigateTo({
      url: './ask/ask',
    })
  }
})