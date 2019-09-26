<template>
  <div id="photo">
    <div class="demo-image__lazy">
      <el-image v-for="url in urls" :key="url" :src="url" :preview-src-list="urls" lazy fit="cover"></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name: "photo",
  data() {
    return {
      urls: [
        // require("../assets/floatingbus.png"),
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569489104139&di=878dc911bc61a92ba191a539d3a129e1&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F15035610cde83cea67c14c5a04ce5f7c13886810.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569489004127&di=a41d0c95924cca15056ad1d71639d898&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171009%2F0aa0220e0ace426cbe078ddc85080ffd.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569489004124&di=b8a82c4c6e647b023e657d633d538526&imgtype=0&src=http%3A%2F%2Fimg2.cache.netease.com%2Fent%2F2014%2F2%2F4%2F201402040845127393c_550.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569489050724&di=6cb5578989284f38510ff8fa9ce43be1&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F20160225%2FU4fK-fxpvytf8732520.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569488877151&di=e1c7327c096df2a9d0ad19ec524caec9&imgtype=0&src=http%3A%2F%2Fdata.whicdn.com%2Fimages%2F56643776%2Flarge.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569488918093&di=3a47601f5e513bd261856419ec618188&imgtype=0&src=http%3A%2F%2Fdata.whicdn.com%2Fimages%2F150875632%2Flarge.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569488965564&di=b76290331d9fb27d1aa85dc226e090a2&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2F67ac3143gy1fdjx0kpslvj20dw0b4jvj.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569488834590&di=b1f386e3e6294b5802c67eb82b35fc17&imgtype=0&src=http%3A%2F%2Fimg22.mtime.cn%2Fup%2F2011%2F04%2F03%2F010039.18316360_o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570083551&di=1eb2234a78ff67c30acb374bd1715172&imgtype=jpg&er=1&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Da26bf3b27a310a55c471d6f082756f9f%2Fa71ea8d3fd1f4134c2576c3f261f95cad1c85e0a.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569488834582&di=d8b3dac1e8f5451c894f2f58c91481ab&imgtype=0&src=http%3A%2F%2Fimg.guitarchina.com%2Fimg2016%2F0405yy%2F10.jpg",
      ]
    };
  }
}
</script>
<style>
.el-image-viewer__close {
  margin-top: 40px;
  margin-right: 30px;
  color: #fff;
}
.el-image {
  width: 45%;
  padding: 10px;
}
</style>