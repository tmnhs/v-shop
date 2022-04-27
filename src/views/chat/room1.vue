<template>
  <div>
    <van-row class="top-bar">
      <van-col span="3" class="top-bar-left">
        <van-icon name="arrow-left" size="28"></van-icon>
      </van-col>
      <van-col span="18" class="top-bar-content"> tmnhs </van-col>
      <van-col span="3" class="top-bar-right">
        <van-image
          width="40"
          height="40"
          radius="7"
          fit="cover"
          lazy-load
          src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-col>
    </van-row>
    <div class="chat">
      <!-- <van-skeleton title avatar :row="3" >
            <div>shijia</div>
        </van-skeleton> -->
      <div class="chat-main">
        <div class="chat-ls">
          <div class="chat-time">12:33</div>
          <div class="msg-m msg-left">
            <van-image
              class="user-img"
              width="40"
              height="40"
              radius="7"
              fit="cover"
              lazy-load
              src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
            <div class="message">
              <div class="msg-text">
                你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么
              </div>
            </div>
          </div>
        </div>
        <div class="chat-ls">
          <div class="msg-m msg-right">
            <div class="chat-time">12:33</div>

            <van-image
              class="user-img"
              width="40"
              height="40"
              radius="7"
              fit="cover"
              lazy-load
              src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
            <div class="message">
              <div class="msg-text">
                你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么你在干什么
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
</script>

<style   scoped>
.top-bar {
  height: 46px;
  width: 100%;
  background: #fff;
}
.top-bar-left {
  /* border: 1px solid red; */
  margin: auto;
}
.top-bar-content {
  /* border: 1px solid green; */
  text-align: center;
  line-height: 46px;
  font-weight: bold;
}
.top-bar-right {
  /* line-height: 45px; */
  margin-top: 3px;
}
.chat {
  height: 100%;
  width: 100%;
  .chat-main {
    padding-left: 5px;
    padding-top: 10px;
    padding-right: 5px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  .chat-ls {
    .chat-time {
      font-size: 8px;
      color: rgba(39, 40, 50, 0.3);
      line-height: 15px;
      padding: 5px 0;
      text-align: center;
    }
    .msg-m {
      display: flex;
      padding: 5px 0;
      .user.img {
      }
      .message {
        max-width: 300px;
      }
      .msg-text {
        font-size: 15px;
        color: #000;
        line-height: 20px;
        padding: 5px;
      }
    }
    .msg-left {
      flex-direction: row;
      .msg-text {
        margin-left: 16px;
        background: #fff;
        border-radius: 0px 20px 20px 20px;
      }
    }
       .msg-right {
      flex-direction: row-reverse;
      .msg-text {
        margin-left: 16px;
        background: #fff;
        border-radius: 0px 20px 20px 20px;
      }
    }
  }
}
</style>

