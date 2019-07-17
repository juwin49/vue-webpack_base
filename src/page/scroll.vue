<template>
  <div class="container"  @scroll="handleScroll()">
  	<div class="orders-list bg-fff" v-for="(data,index) in data">
      <div class="orders-tittle clearfix plr">
        <i></i>
        <p class="left">订单号{{index}} : <span>201611170301</span></p>
        <p class="right">￥2000.00</p>
      </div>
      <div class="orders-content plr">
        <p class="orders-name"><i></i>顾客 : <span>张三{{index}}</span></p>
        <p class="orders-time"><i></i>时间 : <span>2017-3-27 09:20</span></p>
      </div>
    </div>
    <div class="load-more-gif">loading...</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data: [1,2,3,4,5,6,7,8,9,10],
      scloll:true
    }
  },
  mounted () {
    this.handleScroll();
  },
  methods:{
    handleScroll(){
        //scrollTop为滚动条在Y轴上的滚动距离。
        //clientHeight为内容可视区域的高度。
        //scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
        if(this.$el.scrollTop+this.$el.offsetHeight>this.$el.scrollHeight){
          this.loadmore();
          this.scloll=true;
          this.list +=1;
        }else{
          this.scloll=false;
        }
    },
    loadmore() {
      setTimeout(() => {
        for(var i = 0; i <10; i++) {
          this.data.push(i);
        }
      }, 2000)
    }
  }
}
</script>
<style >
.container{
	height: 100%;
	overflow-y: scroll;
}
.orders-list{
	height: 4.266667rem;
	border-bottom:0.05rem solid #e4e4e4;
	margin-bottom: 0.5rem;
}
.orders-tittle{
	position: relative;
	height: 1.877333rem;
	border-bottom: 0.05rem dashed #e4e4e4; 
}
.orders-tittle .left{
	height: 1.877333rem;
	line-height: 1.877333rem;
	color: #333;
	padding-left: 0.554667rem;
	font-size: 0.64rem;
}
.orders-tittle .right{
	height: 1.877333rem;
	line-height: 1.877333rem;
	color: #fe4d57;
	font-size: 0.64rem;
}
.orders-tittle i{
	position: absolute;
	width: 0.128rem;
	height: 0.682667rem;
	border-radius: 50%;
	top:50%;
	margin-top: -0.341333rem;
	background-color: #fe4d57;
}
.orders-content p{
	position: relative;
	height: 0.64rem;
	line-height: 0.64rem;
	color: #555;
	font-size: 0.554667rem;
	padding-left: 1.194667rem;
}
.orders-content .orders-name{
	margin-top: 0.426667rem;
	margin-bottom: 0.213333rem;
}
.orders-content i{
	position: absolute;
	width: 0.554667rem;
	height: 0.554667rem;
	left: 0.213333rem;
	top: 0.042667rem;
}
.orders-content .orders-name i{
	/*background: url(order_customer.png);*/
	background-size: 100% 100%;
}
.orders-content .orders-time i{
	/*background: url(order_time.png);*/
	background-size: 100% 100%;
}

 
</style>
