<template>
  <div id="music">
    <div class="box">
      <div class="search">
        <el-row type="flex" :gutter="10" justify="center">
          <el-col :span="6">
            <el-input v-model="searchKey"></el-input>
          </el-col>
          <el-col :span="1">
            <el-button @click="searchMusic">搜索</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="container">
        <div class="songs">
          <ul>
            <li v-for="song in songs" :key="song.id">
              <el-row type="flex">
                <el-col :span="20">{{song.name}} - {{song.artist}}</el-col>
                <el-col :span="2">
                  <i :id="song.id" name="play-list" :class="song.state" @click="playInList(song)"></i>
                </el-col>
                <el-col :span="2">
                  <i class="el-icon-delete" @click="delSong(song.id)"></i>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
        <div class="list">
          <el-table :data="searchResult" max-height="600" height="600">
            <el-table-column prop="name" label="歌名" width="350"></el-table-column>
            <el-table-column prop="artists[0].name" label="歌手" width="200"></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="play(scope.row)" size="small">播放</el-button>
                <el-button @click="add(scope.row)" size="small">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "music",
  data() {
    return {
      searchKey: "",
      searchResult: [],
      songUrl: "",
      songs: [
        {
          id: "17177324",
          name: "Yellow",
          artist: "Coldplay",
          state: "el-icon-video-play"
        }
      ],
      playState: { play: "el-icon-video-play", pause: "el-icon-video-pause" },
      playName: "",
      playId: "17177324"
    };
  },
  methods: {
    async searchMusic() {
      if (!this.searchKey) return;
      let res = await fetch(
        `http://localhost:3000/search?keywords=${this.searchKey}`
      );
      let result = await res.json();
      this.searchResult = result.result.songs;
    },
    async play(row) {
      if (!row.id) return;
      // 请求资源
      let res = await fetch(`http://localhost:3000/song/url?id=${row.id}`);
      let result = await res.json();
      this.songUrl = result.data[0].url;
      // audio播放歌曲
      const audio = document.getElementsByClassName("audio")[0];
      audio.src = this.songUrl;
      audio.name = this.playId;
      audio.play();
      // 更新播放器字段名
      let player = document.getElementById("music-info");
      player.innerHTML = row.name + " - " + row.artists[0].name;
      // 更新播放列表图标状态
      this.songs.forEach(song => {
        song.state = this.playState.play;
      });
      // 更新全局变量
      this.playId = row.id;
      // 更新图标状态
      row.state = this.playState.pause;
      // 添加到播放列表
      this.add(row);
    },
    async playInList(song) {
      const audio = document.getElementsByClassName("audio")[0];
      this.playId = song.id;
      const playInfo = document.getElementById("music-info");

      // 如果是同一首歌 暂停状态 就继续播放
      if (audio.name == song.id && audio.paused) {
        audio.play();
        return;
      }

      // 播放状态时，点击暂停
      if (audio.name == song.id && !audio.paused) {
        audio.pause();
        return;
      }

      // 播放音乐
      let res = await fetch(`http://localhost:3000/song/url?id=${song.id}`);
      let result = await res.json();
      this.songUrl = result.data[0].url;
      audio.src = this.songUrl;
      audio.name = song.id;
      this.playId = song.id;
      audio.play();
      // 更新audio栏音乐名字
      playInfo.innerHTML = song.name + " - " + song.artist;
    },
    delSong(id) {
      this.songs.forEach((song, index) => {
        if (id == song.id) {
          this.songs.splice(index, 1);
          return;
        }
      });
    },
    add(row) {
      if (!row.id) return;
      this.songs.forEach(song => {
        if (song.id == row.id) mark = false;
      });
      if (mark == false) return;
      let newSong = {};
      newSong.id = row.id;
      newSong.name = row.name;
      newSong.artist = row.artists[0].name;
      if (row.state) {
        newSong.state = row.state;
      } else {
        newSong.state = this.playState.play;
      }

      let mark = true;

      this.songs.unshift(newSong);
    }
  },
  mounted() {
    const audio = document.getElementsByClassName("audio")[0];
    const i = document.getElementById("player-icon");

    audio.addEventListener("play", () => {
      this.songs.forEach(song => {
        if (song.id == this.playId) {
          song.state = this.playState.pause;
        } else {
          song.state = this.playState.play;
        }
      });
      i.className = this.playState.pause;
    });
    audio.addEventListener("pause", () => {
      this.songs.forEach(song => {
        if (song.id == this.playId) {
          song.state = this.playState.play;
        }
      });
      i.className = this.playState.play;
    });
    // 结束后自动，随机播放
    audio.addEventListener("ended", () => {
      let newSongList = this.songs.filter(song => song.id != this.playId);
      let index = Math.floor(Math.random() * newSongList.length);
      this.playInList(newSongList[index]);
    });
    // 点击随机播放
    document.getElementById("next-song").addEventListener("click", () => {
      let newSongList = this.songs.filter(song => song.id != this.playId);
      let index = Math.floor(Math.random() * newSongList.length);
      this.playInList(newSongList[index]);
    });
  }
};
</script>
<style>
#music {
  text-align: center;
}
.list {
  padding: 10px;
  height: 600px;
  width: 700px;
  background-color: aqua;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
}
.songs {
  width: 400px;
  height: 600px;
  overflow-y: auto;
  text-align: left;
}
.container {
  display: flex;
  height: 500px;
}
.songs::-webkit-scrollbar {
  display: none;
}
ul {
  list-style: none;
}
</style>