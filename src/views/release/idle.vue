
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
    //tag
  
    const showTag = ref(true);
    const closeTag = (tag) => {
      //todo 删除逻辑,调用接口
      for(var i = 0, len = nowTags.length; i < len; i++) {
        if(tag.id==nowTags[i].id){
          nowTags[i].show=false
          break
        }
      }
    };

    const showPopover = ref(false);
    const allTags = [
      //todo 获取所有标签
      { text: '可刀', id: 1 },
      { text: '自取', id: 2 },
      { text: '派送', id: 13 },
    ];
    const nowTags = [
      //TODO 获取该物品的标签
      { text: '可刀', id: 1 ,show:true},
      { text: '自取', id: 2 ,show:true},
    ];
    const selectTag = (value) => {
      nowTags.push({text:value.text,id:value.id,show:true})
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
      showTag,
      closeTag,
      showPopover,
      allTags,
      nowTags,
      selectTag,
    };
  },
};
</script>

<template>
  <div class="main">
    <Plate title="填写闲置物品信息" />

    <van-form @failed="onFailed">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="物品名"
          label="物品名"
          required
          placeholder="物品名"
          :rules="[{ required: true, message: '请填写物品名' }]"
        />
        <van-field v-model="username" name="品牌" label="品牌" placeholder="品牌，可选" />
        <!-- 通过 pattern 进行正则校验 -->
        <!-- <van-field
      v-model="value1"
      name="pattern"
      placeholder="正则校验"
      :rules="[{ pattern, message: '请输入正确内容' }]"
    /> -->
        <van-field label="标签" name="tag" v-model="tags" id="tag">
          <template #input>
            <van-tag
              style="margin-right: 5px"
              v-for="tag in nowTags"
              :key="tag.id"
              :show="tag.show"
              closeable
              size="medium"
              type="primary"
              plain
              @close="closeTag(tag)"
            >
              {{ tag.text }}{{ tag.show }}
            </van-tag>
            <van-popover v-model:show="showPopover" :actions="allTags" @select="selectTag">
              <template #reference>
                <van-button class="pop-btn" size="mini" icon="plus"></van-button>
              </template>
            </van-popover>
          </template>
        </van-field>
        <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu> -->

        <van-field
          v-model="result1"
          is-link
          readonly
          name="picker1"
          label="购买方式"
          placeholder="你是怎样购得这件物品的"
          @click="showPickerChannel = true"
        />
        <van-popup v-model:show="showPickerChannel" position="bottom">
          <van-picker :columns="channels" @confirm="onConfirmChannels" @cancel="showPickerChannel = false" />
        </van-popup>

        <van-field
          v-model="result"
          is-link
          readonly
          name="picker"
          label="品质"
          placeholder="点击选择几成新"
          @click="showPickerQuality = true"
        />
        <van-popup v-model:show="showPickerQuality" position="bottom">
          <van-picker :columns="qualities" @confirm="onConfirmQualities" @cancel="onConfirmQualities = false" />
        </van-popup>
        <van-field name="stepper" label="原价">
          <template #input>
            <van-stepper
              class="form-price"
              v-model="value"
              input-width="70px"
              button-size="32px"
              theme="round"
              min="0"
              default-value="0"
              placeholder="原价"
              integer
            />
          </template>
        </van-field>

        <van-field name="stepper" label="想卖多少(元)" required>
          <template #input>
            <van-stepper
              class="form-price"
              v-model="value1"
              input-width="70px"
              button-size="32px"
              theme="round"
              min="0"
              default-value="0"
              placeholder="现价"
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
          label="物品描述"
          type="textarea"
          maxlength="50"
          placeholder="您还有其他想要描述的吗"
          show-word-limit
        />

        <van-field name="uploader" label="图片上传">
          <template #input>
            <van-uploader v-model="image" />
          </template>
        </van-field>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 发布 </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
/* .form-price {
  float: right;
  margin-right: 8px;
}
.pop-btn{
  float: right;
  margin-right: 5px;
} */
</style>