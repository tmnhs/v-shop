
<script >
import { ref } from 'vue';
import { Toast } from 'vant';
import Plate from '@/components/Plate/index.vue';

export default {
  components: {
    Plate,
  },
  setup() {
    //todo ,数据绑定
    const pattern = /\d{6}/;
    const result = ref('');
    const result1 = ref('');
    const showPickerQuality = ref(false);
    const showPickerChannel = ref(false);
    const channels = ['线上购买', '实体店购买'];
    const qualities = [
      '一成新',
      '二成新',
      '三成新',
      '四成新',
      '五成新',
      '六成新',
      '七成新',
      '八成新',
      '九成新',
      '全新',
    ];
    const image = ref([{ url: 'https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg' }]);
    const onConfirmChannels = (value, index) => {
      result1.value = value;
      // alert(value+index )
      // Toast(`当前值: ${value}, 当前索引: ${index}`);

      showPickerChannel.value = false;
    };
    const onConfirmQualities = (value, index) => {
      result.value = value;
      // alert(value+index )
      Toast(`当前值: ${value}, 当前索引: ${index}`);

      showPickerQuality.value = false;
    };
    return {
      pattern,
      result,
      result1,
      showPickerQuality,
      showPickerChannel,
      channels,
      onConfirmChannels,
      qualities,
      onConfirmQualities,
      image,
    };
  },
};
</script>

<template>
  <div class="main">
    <Plate title="填写求购物品信息" />

    <van-form @failed="onFailed">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="求购物品名"
          label="求购物品名"
          required
          placeholder="求购物品名"
          :rules="[{ required: true, message: '请填写物品名' }]"
        />
      

     
        <van-popup v-model:show="showPickerQuality" position="bottom">
          <van-picker :columns="qualities" @confirm="onConfirmQualities" @cancel="onConfirmQualities = false" />
        </van-popup>
        <van-field name="stepper" label="最低价">
          <template #input>
            <van-stepper
              class="form-price"
              v-model="value"
              input-width="40px"
              button-size="32px"
              theme="round"
              min="0"
              default-value="0"
              placeholder="最低价"
              integer
            />
       
          </template>
        </van-field>
        <van-field name="stepper" label="最高价">
          <template #input>
            <van-stepper
              class="form-price"
              v-model="value1"
              input-width="40px"
              button-size="32px"
              theme="round"
              min="0"
              default-value="0"
              placeholder="最高价"
              required
              integer
            />
          
          </template>
        </van-field>
        <van-field
          required
          v-model="message"
          rows="2"
          autosize
          label="求购描述"
          type="textarea"
          maxlength="50"
          placeholder="求购物品的具体要求"
          show-word-limit
          
        />

      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 发布 </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.form-price {
  float: right;
  margin-right: 8px;
}
</style>