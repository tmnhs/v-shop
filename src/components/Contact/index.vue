<script setup >

</script>

<template >
<van-row class="main">
  <van-col span="4" class="left">
    <div class="left-avatar">
      <!-- <img class="left-avatar-img" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt=""> -->
      <van-badge :content="5">
           <van-image
            width="50"
            height="50"
            radius="7"
            fit="cover"
            lazy-load
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />

      </van-badge>
   
    </div>
  </van-col>
  <van-col span="19" class="right">
    <div>
      <span class="right-name">听海</span>
      <span class="right-time">17:21</span>
    </div>
   <p class="right-message">你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么</p>
  </van-col>
</van-row>
  
</template>
  


<style scoped>
.main{
  background-color: #fff;
  width: 100%;
  height: 64px;
}
.left{
  height: 64px;
  /* border: 1px solid blue; */
  line-height: 64px;
  margin: 0 auto;
}

.left-avatar{
  margin-top: 7px;
  margin-left: 6px;
  /* display:inline-block; */

}
.right{
  padding: 8px;
  border-bottom: 1px solid rgb(184, 180, 180);
}
.right-name{
  font-weight: bold;
  font-size: 15px;
}
.right-time{
  
  float: right;
  font-size: 8px;
}
.right-message{
  padding: 0;
  margin: 0;
  margin-top: 7px;
  font-size: 10px;
  color: rgb(172, 165, 165);
  /*单行省略号 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>