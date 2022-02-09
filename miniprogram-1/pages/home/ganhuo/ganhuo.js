// pages/home/ganhuo/ganhuo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      ganhuo:[],
      pageIndex:1, 
      pageSize:4,  // 指定查找长度
    },

    /**
     * 生命周期函数--监听页面加载
     */

    async getGanHuo_List(){
      let {pageSize,pageIndex,ganhuo} = this.data;
      const db=wx.cloud.database();
      let data = db.collection('ganhuo')
        .skip((pageIndex - 1) * pageSize)  //衔接前文内容
        .limit(pageSize)  // 限制查找条数
        .get(
          {
            success: res => {
              console.log("database connected");
              // console.log(data);
              this.setData({
                ganhuo: res.data
              });
            },
            fail: function () {
              console.log("failed");
            }
          }
        )
        console.log(ganhuo);
    },
    
    onLoad: 
    function (options) {
        let data = this.getGanHuo_List();
    },
    
    scrolltolower(){
      this.setData({
        pageIndex:this.data.pageIndex +=1  //翻页
      },() => {
        this.getGanHuo_List()
      })
      
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
          url: '/pages/channel/blank/blank?link='+link
        })
      },
})

