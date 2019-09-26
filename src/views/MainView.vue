<template>
  <div class="main-view">
    <el-container>
      <el-header class="header">
        <el-menu class="menu" mode="horizontal" router>
          <el-menu-item index="/" class="band" style="margin-left:20px">
            <template slot="title">
              <div icon="el-icon-truck">Floating Bus</div>
            </template>
          </el-menu-item>
          <el-menu-item index="/music" style="margin-left:30px">音乐</el-menu-item>
          <el-menu-item index="/photo">照片</el-menu-item>
          <el-menu-item index="/video">视频</el-menu-item>
          <el-menu-item index="/comic">漫画</el-menu-item>
          <el-menu-item index="/product">周边产品</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="body">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "main-view",
  data() {
    return {};
  },
  methods: {
    
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
  color: #ffffff;
  background: #000000;
}

.main-view .el-menu--horizontal .el-menu-item.is-active {
  color: #ffffff;
  background: #000000;
  border-bottom: 0;
}
</style>
