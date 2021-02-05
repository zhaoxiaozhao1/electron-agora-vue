<!-- render>views>index.vue -->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    // console.log(
    //   process.env.APP_PLATFORM,
    //   "--=-=-=-=-=-=-=-=-=-=",
    //   process.env.NODE_ENV
    // );
    if (process.env.APP_PLATFORM == "web") {
      this.$router.push({
        name: "login_web",
      });
    } else {
      this.$router.push({
        name: "login_app",
      });
    }
  },
};
</script>
<style></style>