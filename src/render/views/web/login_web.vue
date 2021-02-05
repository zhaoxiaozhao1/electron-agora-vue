<template>
  <div id="loginWeb">
    <div id="console"></div>
    <p>本地视频</p>
    <div id="local"></div>
    <p>远端视频</p>
    <div id="remote"></div>
  </div>
</template>

<script>
import AgoraWebClient from "../../agora/web/agoraWebSDK";
export default {
  created() {
    const webClient = new AgoraWebClient();
    webClient.creatClient("appid", "test", null, "local", "remote");
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#local,
#remote {
  width: 300px;
  height: 500px;
}
.player {
  height: 100%;
}
</style>