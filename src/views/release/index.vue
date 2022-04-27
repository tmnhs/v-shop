<script lang="ts" setup>

import Tabbar from '@/components/Tabbar/index.vue';
import Plate from '@/components/Plate/index.vue';


</script>

<template>
   
    <div class="main">
      <Plate class="section-header" title="发布" />
      <br>      
    <van-cell-group>
        <van-cell
          to="/release/idle"
          border="false">
            发闲置
        </van-cell>
        <br>
        <van-cell 
         to="/release/purchase"
          >
            发求购
        </van-cell>
        </van-cell-group>

    <!-- 底部导航栏 -->
    <Tabbar />
  </div>
</template>

<style lang="less" scoped>

</style>
