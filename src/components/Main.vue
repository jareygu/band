<template>
  <div class="main">
    <el-container>
      <el-header>
        <el-menu
        :default-active="1"
          class="menu"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" id="band">
            <template slot="title">
              <div icon="el-icon-truck">Floating Bus</div>
            </template>
          </el-menu-item>
          <el-menu-item index="2">音乐</el-menu-item>
          <el-menu-item index="3">照片</el-menu-item>
          <el-menu-item index="4">视频</el-menu-item>
          <el-menu-item index="5">漫画</el-menu-item>
          <el-menu-item index="6">周边产品</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="body">
        <img src="../assets/floatingbus.jpg" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
#band {
  font-family: fantasy;
  font-size: 20px;
  text-align: center;
}
.body {
  text-align: center
}
</style>
