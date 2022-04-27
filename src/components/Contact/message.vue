<template>
  <div class="record-wrapper">
    <div class="time">11:21</div>
    <div v-if="from == 1" class="msg msg-right">
      <div class="img-wrapper">
        <img class="img" :src="from1" />
      </div>
      <div class="message-wrapper message-wrapper-right">
        <div class="message">{{ message }}</div>
      </div>
    </div>

    <div v-else class="msg msg-left">
      <div class="img-wrapper">
        <img class="img" :src="from2" />
      </div>
      <div class="message-wrapper message-wrapper-left">
        <div class="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    from: Number, // 1: 自己    2: 别人
    message: String,
  },
  data() {
    return {
      from1: require("../../../assets/imgs/from1.jpg"),
      from2: require("../../../assets/imgs/from2.jpg"),
    };
  },
};
</script>
<style lang="scss" scoped>
.record-wrapper {
  margin: 4px;
  padding: 4px;
}
.time {
  text-align: center;
}
.msg {
  display: flex;
  flex-direction: row; 

  .message-wrapper {
    max-width: 220px;

    margin: 0px 10px 0px 10px;

    .message {
      margin: 8px;
      word-wrap: break-word; //英文换行
    }
  }

  .message-wrapper-left {
    background-color: lightslategray;
    border-radius: 0px 12px 12px 12px;
  }

  .message-wrapper-right {
    background-color: powderblue;
    border-radius: 12px 0px 12px 12px;
  }

  .img {
    flex: auto;
    height: 36px;
    width: 36px;
    border-radius: 8px;
  }
}
.msg-right {
  flex-direction: row-reverse;
}
.msg-left {
  flex-direction: row;
}
</style>