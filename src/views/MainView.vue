<template>
  <div class="main-view">
    <el-container>
      <el-header class="header">
        <el-menu class="menu" mode="horizontal" router>
          <el-menu-item
            index="/"
            class="band"
            style="margin-left:20px;font-size:25px;color:#ffffff"
          >Floating Bus</el-menu-item>
          <el-menu-item index="/music" style="margin-left:30px">音乐</el-menu-item>
          <el-menu-item index="/photo">照片</el-menu-item>
          <el-menu-item index="/video">视频</el-menu-item>
          <el-menu-item index="/comic">漫画</el-menu-item>
          <el-menu-item index="/product">周边产品</el-menu-item>
          <el-menu-item style="position:absolute;right:0;margin-right:50px;color:Yellow">
            <template>
              <audio
                name="17177324"
                class="audio"
                :src="src"
                @play="show=false"
                @pause="show=true"
              >您的浏览器不支持audio标签。</audio>
              <div id="player">
                <i id="player-icon" :class="playState.play" @click="play"></i>
                <a id="music-info">Yellow - Coldplay</a>
                <i class="el-icon-refresh-right" @click="replay" style="margin-left:20px"></i>
                <i class="el-icon-d-arrow-right" id="next-song"></i>
              </div>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="body">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "main-view",
  data() {
    return {
      src:
        "http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=240945&type=convert_url&response=res",
      playState: { play: "el-icon-video-play", pause: "el-icon-video-pause" }
    };
  },
  methods: {
    play() {
      const audio = document.getElementsByClassName("audio")[0];
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    replay() {
      document.getElementsByClassName("audio")[0].load();
    }
  }
};
</script>
<style>
.main-view .el-header {
  padding: 0;
  position: fixed;
  width: 100%;
}
.main-view .el-main {
  margin-top: 61px;
  height: 709px;
  width: 100%;
  background-image: url("../assets/floatingbus.png");
  background-size: 100%;
  background-attachment: fixed;
  background-position-y: 35px;
  background-repeat: no-repeat;
}
.main-view .band {
  font-family: fantasy;
  font-size: 20px;
  text-align: center;
}
.body {
  text-align: center;
}

.main-view .el-menu {
  background: #000000;
}
.main-view .el-menu--horizontal .el-menu-item {
  color: #ffffff;
  background: #000000;
  border-bottom: 0;
}
.main-view .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.main-view .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  color: #a8a8a8;
  background: #000000;
}

.main-view .el-menu--horizontal .el-menu-item.is-active {
  color: #a8a8a8;
  background: #000000;
  border-bottom: 0;
}
</style>
