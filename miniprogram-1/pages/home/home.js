// pages/homepage/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

      articles:[1],
      btns:[{name:"线上社群",image_src:"/images/home_btns/online_group.png"},{name:"线下活动",image_src:"/images/home_btns/activity.png"},{name:"生活服务",image_src:"/images/home_btns/life_service.png"},{name:"实习信息",image_src:"/images/home_btns/intern_info.png"},{name:"更多",image_src:"/images/home_btns/more.png"}],
      ganhuo:[],
      ganhuo4:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const db=wx.cloud.database();
      db.collection('article').get(
        {
          success:res => {
            console.log("database connected")
            console.log(res.data)
            this.setData({
              articles:res.data
            })
          },
          fail:function(){
            console.log("failed")
          }
        }
      )
      db.collection('ganhuo').get(
        {
          success:res=>{
            console.log("database connected")
            console.log(res.data)
            const temp=res.data.slice(0,4)
            console.log(temp)
            this.setData({
              ganhuo:res.data,
              ganhuo4:temp
            })
            console.log("ganhuo4"+ganhuo4)
          },
          fail:function(){
            console.log("failed")
          }
        }
      )
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
   
    toBlank:function(e){
      console.log(e.currentTarget.dataset.link)
      const link=e.currentTarget.dataset.link
      wx.navigateTo({
        url: '../channel/blank/blank?link='+link
      })
    },
    toganhuo:function(){
      wx.navigateTo({
        url: './ganhuo/ganhuo',
      })
    }
})