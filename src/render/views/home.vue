<template>
  <div class="content">
    <h3>当前渲染进程版本号：{{ version.version.join(".") }}</h3>
    <h1>Welcome to electron-vue-template!111</h1>
    <h2>name:{{ userInfo.name }}</h2>
    <h2>address:{{ userInfo.address }}</h2>
    <button @click="changeAddress">设置address为tianjin</button>
    <!-- <button @click="toOrderPage">去订单页</button> -->
    <router-link :to="{ name: 'order' }" tag="button">去订单页</router-link>
    <div id="console"></div>
    <div id="local"></div>
    <div id="remote"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import version from "@config/version.js";
import AgoraWebClient from "../agora/web/agoraWebSDK";
// import AgoraRtcEngine from "agora-electron-sdk";
import path from "path";
import os from "os";
export default {
  data() {
    return {
      version,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    ...mapMutations(["setUserInfo"]),
    changeAddress() {
      this.setUserInfo({
        address: "tianjin",
      });
    },
    toOrderPage() {
      this.$router.push({
        name: "order",
      });
    },
  },
  mounted: function () {
    const webClient = new AgoraWebClient();
    webClient.creatClient("020b1c70b05f463683ad1a7980041a3e", "test", null);
    // console.log(webClient.options, "=======------");

    // this.$nextTick(function () {
    //   // Code that will run only after the
    //   // entire view has been rendered
    //   if (global.rtcEngine) {
    //     global.rtcEngine.release();
    //     global.rtcEngine = null;
    //   }
    //   if (!APPID) {
    //     alert("Please provide APPID in App.vue");
    //     return;
    //   }
    //   const consoleContainer = document.querySelector("#console");
    //   let rtcEngine = new AgoraRtcEngine();
    //   rtcEngine.initialize(APPID);
    //   // listen to events
    //   rtcEngine.on("joinedChannel", (channel, uid, elapsed) => {
    //     consoleContainer.innerHTML = `join channel success ${channel} ${uid} ${elapsed}`;
    //     let localVideoContainer = document.querySelector("#local");
    //     //setup render area for local user
    //     rtcEngine.setupLocalVideo(localVideoContainer);
    //   });
    //   rtcEngine.on("error", (err, msg) => {
    //     consoleContainer.innerHTML = `error: code ${err} - ${msg}`;
    //   });
    //   rtcEngine.on("userJoined", (uid) => {
    //     //setup render area for joined user
    //     let remoteVideoContainer = document.querySelector("#remote");
    //     rtcEngine.setupViewContentMode(uid, 1);
    //     rtcEngine.subscribe(uid, remoteVideoContainer);
    //   });
    //   // set channel profile, 0: video call, 1: live broadcasting
    //   rtcEngine.setChannelProfile(1);
    //   rtcEngine.setClientRole(1);
    //   // enable video, call disableVideo() is you don't need video at all
    //   rtcEngine.enableVideo();
    //   const logpath = path.join(os.homedir(), "agorasdk.log");
    //   // set where log file should be put for problem diagnostic
    //   rtcEngine.setLogFile(logpath);
    //   // join channel to rock!
    //   rtcEngine.joinChannel(
    //     null,
    //     "demoChannel",
    //     null,
    //     Math.floor(new Date().getTime() / 1000)
    //   );
    //   global.rtcEngine = rtcEngine;
    // });
  },
};
</script>
<style></style>