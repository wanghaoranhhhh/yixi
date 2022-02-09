const app = getApp()
 
 
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    tittle: "智能问答",
    syas: [{
        'robot': 'Hello!伙伴！我是一席的解惑AI，有什么问题就问我吧，haha。。',
        'isay':"Hello!"
      }
    ],
    headLeft: '/images/avatar.png',
    headRight: '',
 
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
 
  },
 
 
  converSation: function(e) {
    let that = this
    var obj = {},
   isay = e.detail.value.says,
     syas=that.data.syas,
    length = syas.length,
    key='6033e91128824e4cb2db45bc15cde5cf'//这里填入你得到的图灵机器人的apikey
    
    console.log(length)
    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key='+key+'&info='+isay,
      success:function(res){
        let tuling = res.data.text;
        obj.robot=tuling;
        obj.isay=isay;
        syas[length] = obj;
        that.setData({
          syas:syas
        })
    }})
    
   
  },
  delectChat:function(){
    let that = this
    that.setData({
      syas:[]
    })
  }
 
})